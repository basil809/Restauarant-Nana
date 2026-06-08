import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      match: [/^\+?[0-9]{10,}$/, 'Please provide a valid phone number'],
    },
    numberOfGuests: {
      type: Number,
      required: [true, 'Number of guests is required'],
      min: 1,
      max: 20,
    },
    reservationDate: {
      type: Date,
      required: [true, 'Reservation date is required'],
    },
    reservationTime: {
      type: String,
      required: [true, 'Reservation time is required'],
      enum: ['11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'],
    },
    occasion: {
      type: String,
      enum: ['anniversary', 'birthday', 'business', 'proposal', 'romantic', 'casual', 'other'],
      default: 'casual',
    },
    specialRequests: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'cancelled'],
      default: 'pending',
    },
    confirmationToken: String,
    confirmationTokenExpires: Date,
    notificationSent: {
      type: Boolean,
      default: false,
    },
    preferredTable: {
      type: String,
      enum: ['window', 'private', 'bar', 'garden', 'regular'],
      default: 'regular',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Reservation', reservationSchema);
