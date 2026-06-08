import express from 'express';
import Contact from '../models/Contact.js';
import { sendContactEmail } from '../utils/email.js';

const router = express.Router();

// Get all contacts (admin)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message, category } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const contact = new Contact({
      name,
      email,
      phone,
      subject,
      message,
      category: category || 'other',
    });

    await contact.save();

    // Send notification email to admin
    try {
      await sendContactEmail(contact);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
    }

    res.status(201).json({
      message: 'Message sent successfully. We will get back to you soon.',
      contact,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get contact by ID (admin)
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Mark contact as read (admin)
router.patch('/:id/read', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Reply to contact (admin)
router.patch('/:id/reply', async (req, res) => {
  try {
    const { response } = req.body;
    if (!response) {
      return res.status(400).json({ error: 'Response is required' });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        response,
        status: 'replied',
        respondedAt: new Date(),
      },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json({ message: 'Response sent', contact });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
