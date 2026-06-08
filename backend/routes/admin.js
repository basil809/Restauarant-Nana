import express from 'express';

const router = express.Router();

// Admin dashboard stats
router.get('/stats', async (req, res) => {
  try {
    // Import models
    const Reservation = (await import('../models/Reservation.js')).default;
    const Contact = (await import('../models/Contact.js')).default;
    const MenuItem = (await import('../models/MenuItem.js')).default;

    const totalReservations = await Reservation.countDocuments();
    const pendingReservations = await Reservation.countDocuments({ status: 'pending' });
    const confirmedReservations = await Reservation.countDocuments({ status: 'confirmed' });
    const totalContacts = await Contact.countDocuments();
    const unreadContacts = await Contact.countDocuments({ read: false });
    const menuItems = await MenuItem.countDocuments();

    res.json({
      reservations: {
        total: totalReservations,
        pending: pendingReservations,
        confirmed: confirmedReservations,
      },
      contacts: {
        total: totalContacts,
        unread: unreadContacts,
      },
      menu: {
        items: menuItems,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get recent reservations
router.get('/reservations/recent', async (req, res) => {
  try {
    const Reservation = (await import('../models/Reservation.js')).default;
    const reservations = await Reservation.find()
      .sort({ reservationDate: -1 })
      .limit(10);
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
