import express from 'express';
import Reservation from '../models/Reservation.js';
import { sendReservationEmail } from '../utils/email.js';

const router = express.Router();

// Get all reservations (admin only)
router.get('/', async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ reservationDate: 1 });
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new reservation
router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, numberOfGuests, reservationDate, reservationTime, occasion, specialRequests } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !numberOfGuests || !reservationDate || !reservationTime) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create reservation
    const reservation = new Reservation({
      firstName,
      lastName,
      email,
      phone,
      numberOfGuests,
      reservationDate: new Date(reservationDate),
      reservationTime,
      occasion: occasion || 'casual',
      specialRequests,
      status: 'pending',
    });

    await reservation.save();

    // Send confirmation email
    try {
      await sendReservationEmail(reservation);
      reservation.notificationSent = true;
      await reservation.save();
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the reservation if email fails
    }

    res.status(201).json({
      message: 'Reservation created successfully',
      reservation,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get reservation by ID
router.get('/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) {
      return res.status(404).json({ error: 'Reservation not found' });
    }
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update reservation
router.patch('/:id', async (req, res) => {
  try {
    const allowedUpdates = ['status', 'specialRequests', 'numberOfGuests', 'reservationTime', 'preferredTable'];
    const updates = Object.keys(req.body).filter(key => allowedUpdates.includes(key));

    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      { $set: Object.fromEntries(updates.map(key => [key, req.body[key]])) },
      { new: true, runValidators: true }
    );

    if (!reservation) {
      return res.status(404).json({ error: 'Reservation not found' });
    }

    res.json({ message: 'Reservation updated', reservation });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Cancel reservation
router.delete('/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      { status: 'cancelled' },
      { new: true }
    );

    if (!reservation) {
      return res.status(404).json({ error: 'Reservation not found' });
    }

    res.json({ message: 'Reservation cancelled', reservation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
