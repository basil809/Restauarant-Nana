import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    description: String,
    imageUrl: {
      type: String,
      required: [true, 'Image URL is required'],
    },
    category: {
      type: String,
      enum: ['food', 'interior', 'drinks', 'events', 'staff', 'ambiance'],
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    likes: {
      type: Number,
      default: 0,
    },
    instagramPostId: String,
    instagramUrl: String,
    photographer: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Gallery', gallerySchema);
