import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email'],
    },
    phone: String,
    subject: {
      type: String,
      required: [true, 'Subject is required'],
      trim: true,
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      maxlength: 2000,
    },
    category: {
      type: String,
      enum: ['reservation', 'event', 'catering', 'feedback', 'other'],
      default: 'other',
    },
    status: {
      type: String,
      enum: ['new', 'replied', 'resolved'],
      default: 'new',
    },
    read: {
      type: Boolean,
      default: false,
    },
    response: String,
    respondedAt: Date,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Contact', contactSchema);
