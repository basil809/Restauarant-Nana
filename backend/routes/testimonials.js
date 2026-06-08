import express from 'express';
import Testimonial from '../models/Testimonial.js';

const router = express.Router();

// Get approved testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ approved: true }).sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get featured testimonials
router.get('/featured', async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ approved: true, featured: true }).limit(6);
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create testimonial
router.post('/', async (req, res) => {
  try {
    const { customerName, customerEmail, rating, review } = req.body;

    if (!customerName || !customerEmail || !rating || !review) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const testimonial = new Testimonial({
      customerName,
      customerEmail,
      rating,
      review,
      visitDate: req.body.visitDate || new Date(),
      occasion: req.body.occasion,
      approved: false, // Require admin approval
    });

    await testimonial.save();

    res.status(201).json({
      message: 'Thank you for your review! It will be published after approval.',
      testimonial,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all testimonials (admin)
router.get('/admin/all', async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Approve testimonial (admin)
router.patch('/:id/approve', async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      { approved: true },
      { new: true }
    );
    if (!testimonial) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }
    res.json(testimonial);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Feature testimonial (admin)
router.patch('/:id/feature', async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      { featured: true },
      { new: true }
    );
    if (!testimonial) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }
    res.json(testimonial);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete testimonial (admin)
router.delete('/:id', async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }
    res.json({ message: 'Testimonial deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
