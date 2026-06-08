# Nana Swahili Restaurant - Premium Website

A luxurious, modern restaurant website for **Nana Swahili Restaurant** located in Westlands, Nairobi, Kenya.

## 🌟 Features

- **Hero Section**: Stunning video background with overlays
- **Menu Management**: Dynamic menu with categories (Swahili Dishes, Seafood, Grilled Platters, etc.)
- **Table Reservations**: Online booking system with email/WhatsApp confirmation
- **Gallery**: Instagram-style masonry gallery with lightbox viewer
- **Experiences**: Jazz Nights, Private Dining, Wine Experiences, Special Events
- **Testimonials**: Customer reviews carousel
- **Admin Dashboard**: Manage reservations, menu items, and inquiries
- **Integrations**: Google Maps, WhatsApp, Email notifications, Instagram feed
- **Responsive Design**: Mobile-first, fully responsive layout
- **Smooth Animations**: Framer Motion animations throughout

## 🛠️ Tech Stack

### Frontend
- React 18+
- Tailwind CSS
- Framer Motion
- React Router
- Axios
- React Icons

### Backend
- Node.js + Express.js
- MongoDB
- Mongoose ODM
- Nodemailer
- Multer (file uploads)

## 📁 Project Structure

```
nana-restaurant-website/
├── frontend/              # React application
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── styles/       # CSS files
│   │   ├── hooks/        # Custom React hooks
│   │   ├── utils/        # Utility functions
│   │   ├── context/      # React context
│   │   ├── App.jsx       # Main App component
│   │   └── main.jsx      # Entry point
│   ├── public/           # Static assets
│   ├── tailwind.config.js
│   ├── package.json
│   └── vite.config.js
├── backend/              # Node.js server
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── controllers/      # Route handlers
│   ├── middleware/       # Express middleware
│   ├── config/          # Configuration files
│   ├── scripts/         # Utility scripts
│   ├── server.js        # Entry point
│   └── .env             # Environment variables
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. Clone or extract the project
```bash
cd nana-restaurant-website
```

2. Install root dependencies
```bash
npm install
```

3. Setup Backend
```bash
cd backend
npm install
# Create .env file with your MongoDB URI and email settings
```

4. Setup Frontend
```bash
cd frontend
npm install
```

### Running the Application

Development mode (runs both frontend and backend):
```bash
npm run dev
```

Or run separately:
```bash
# Terminal 1: Backend
npm run dev:backend

# Terminal 2: Frontend
npm run dev:frontend
```

### Build for Production
```bash
npm run build
npm start
```

## 📱 Pages

- **Home** - Hero section with featured experiences
- **About Us** - Restaurant story and values
- **Menu** - Full menu with filtering and search
- **Experiences** - Jazz nights, private dining, wine, events
- **Gallery** - Instagram-style food and interior photos
- **Reservations** - Table booking system
- **Contact** - Location, contact info, Google Maps
- **Blog** - News and articles
- **Private Dining** - Premium private event booking
- **Admin Dashboard** - Manage bookings and content

## 🔗 Integrations

- **Google Maps API** - Location and directions
- **WhatsApp API** - Direct messaging and reservations
- **Email Notifications** - Reservation confirmations
- **Instagram Feed** - Display latest posts
- **Payment Gateway** - Optional (can be integrated)

## 🎨 Design System

### Color Palette
- **Primary**: Deep Black (#0F0F0F) - Luxury base
- **Gold**: #D4AF37 - Elegant accents
- **Warm Brown**: #8B6F47 - Swahili warmth
- **Cream**: #F5F1E8 - Premium text/backgrounds
- **Amber**: #C67C1D - Warm highlights

### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body**: Lato / Inter (clean, modern)

## 📝 Environment Variables

Create `.env` file in backend/:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
WHATSAPP_NUMBER=+254712345678
GOOGLE_MAPS_KEY=your_api_key
```

## 📧 Contact

**Nana Swahili Restaurant**
- Location: Westlands Road, Four Greenway, Nairobi, Kenya
- Phone: +254 (example)
- Email: info@nanaswahili.com
- Instagram: @nanaswahilirestaurant

## 📄 License

MIT License - © 2024 Nana Swahili Restaurant

---

**Version**: 1.0.0  
**Last Updated**: June 2024

