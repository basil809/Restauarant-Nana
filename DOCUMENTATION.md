# Nana Swahili Restaurant Website - Comprehensive Documentation

## 🎯 Project Overview

A premium, full-stack restaurant website for **Nana Swahili Restaurant** in Westlands, Nairobi. Built with modern web technologies featuring luxury design, responsive layout, and complete business management capabilities.

## ✨ Key Features

### Frontend Features
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Hero Section**: Stunning landing page with parallax effects
- **Menu System**: Categorized menu with filtering and search
- **Table Reservations**: Complete booking system with form validation
- **Gallery**: Masonry layout with lightbox viewer
- **Contact Form**: Multi-purpose contact system
- **Testimonials**: Customer reviews carousel
- **Admin Dashboard**: Statistics and management interface
- **Private Dining**: Customizable event booking
- **Smooth Animations**: Framer Motion transitions throughout
- **Accessibility**: WCAG compliant design

### Backend Features
- **RESTful API**: Complete REST API for all operations
- **Database**: MongoDB with Mongoose ODM
- **Email Notifications**: Automated reservation confirmations
- **Form Validation**: Server-side validation
- **Admin Functions**: Manage reservations, contacts, menu
- **Scalable Architecture**: Clean MVC pattern
- **Error Handling**: Comprehensive error management

## 📁 Project Structure

```
nana-restaurant-website/
├── frontend/                          # React.js application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx            # Navigation component
│   │   │   └── Footer.jsx            # Footer component
│   │   ├── pages/
│   │   │   ├── Home.jsx              # Landing page with hero
│   │   │   ├── Menu.jsx              # Menu browsing
│   │   │   ├── Reservations.jsx      # Table booking
│   │   │   ├── About.jsx             # About the restaurant
│   │   │   ├── Experiences.jsx       # Jazz, wine, events
│   │   │   ├── Gallery.jsx           # Photo gallery
│   │   │   ├── Contact.jsx           # Contact form
│   │   │   ├── PrivateDining.jsx     # Event packages
│   │   │   └── AdminDashboard.jsx    # Admin panel
│   │   ├── styles/
│   │   │   └── globals.css           # Global styles
│   │   ├── App.jsx                   # Main app component
│   │   └── main.jsx                  # Entry point
│   ├── public/                        # Static assets
│   ├── package.json
│   ├── tailwind.config.js            # Tailwind configuration
│   ├── vite.config.js                # Vite configuration
│   └── index.html
├── backend/                           # Node.js server
│   ├── models/
│   │   ├── Reservation.js            # Reservation schema
│   │   ├── MenuItem.js               # Menu item schema
│   │   ├── Contact.js                # Contact form schema
│   │   ├── Gallery.js                # Gallery schema
│   │   └── Testimonial.js            # Review schema
│   ├── routes/
│   │   ├── reservations.js           # Reservation endpoints
│   │   ├── menu.js                   # Menu endpoints
│   │   ├── contact.js                # Contact endpoints
│   │   ├── gallery.js                # Gallery endpoints
│   │   ├── testimonials.js           # Review endpoints
│   │   └── admin.js                  # Admin endpoints
│   ├── controllers/                   # Route handlers (ready for expansion)
│   ├── middleware/                    # Express middleware
│   ├── utils/
│   │   └── email.js                  # Email service
│   ├── config/
│   │   └── sampleData.js             # Sample data
│   ├── server.js                     # Express server
│   ├── package.json
│   ├── .env.example                  # Environment template
│   └── README.md
├── SETUP.md                           # Setup instructions
├── README.md                          # Main documentation
├── package.json                       # Root package.json
└── .gitignore

```

## 🎨 Design System

### Color Palette
```
Primary: #0F0F0F (Luxury Black)
Gold: #D4AF37 (Primary Accent)
Brown: #8B6F47 (Warm Swahili Tone)
Cream: #F5F1E8 (Text/Light Background)
Amber: #C67C1D (Secondary Accent)
Dark Brown: #3d2817 (Alternate Dark)
```

### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body**: Lato (clean, modern)
- **Code**: Monospace

### Components
- Reusable button styles (.btn-primary, .btn-secondary)
- Card components with hover effects
- Form inputs with focus states
- Navigation with mobile menu
- Footer with links and social

## 🚀 Getting Started

### Quick Start (5 minutes)

1. **Install Dependencies**
   ```bash
   npm install
   cd frontend && npm install && cd ..
   cd backend && npm install && cd ..
   ```

2. **Configure Environment**
   - Copy `backend/.env.example` to `backend/.env`
   - Update MongoDB URI and email settings

3. **Start Development Servers**
   ```bash
   npm run dev
   ```

4. **Access the Website**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000
   - Admin: http://localhost:3000/admin

See [SETUP.md](./SETUP.md) for detailed instructions.

## 📊 Pages & Routes

### User Pages
| Page | Route | Features |
|------|-------|----------|
| Home | `/` | Hero, featured experiences, testimonials |
| Menu | `/menu` | Browse all dishes, filter by category |
| Reservations | `/reservations` | Book tables online with form validation |
| About | `/about` | Restaurant story, team, values |
| Experiences | `/experiences` | Jazz nights, wine, private dining |
| Gallery | `/gallery` | Photo gallery with lightbox |
| Contact | `/contact` | Contact form, location, hours |
| Private Dining | `/private-dining` | Event packages and pricing |
| Admin | `/admin` | Dashboard, manage reservations |

## 🔌 API Endpoints

### Reservations
```
GET    /api/reservations              Get all reservations
POST   /api/reservations              Create reservation
GET    /api/reservations/:id          Get specific reservation
PATCH  /api/reservations/:id          Update reservation
DELETE /api/reservations/:id          Cancel reservation
```

### Menu
```
GET    /api/menu                      Get all menu items
GET    /api/menu?category=seafood     Filter by category
GET    /api/menu/:id                  Get specific item
POST   /api/menu                      Add menu item (admin)
PATCH  /api/menu/:id                  Update item (admin)
DELETE /api/menu/:id                  Delete item (admin)
```

### Gallery
```
GET    /api/gallery                   Get all images
GET    /api/gallery/:id               Get specific image
POST   /api/gallery/:id/like          Like image
```

### Contact
```
POST   /api/contact                   Submit contact form
GET    /api/contact                   Get all contacts (admin)
PATCH  /api/contact/:id/reply         Reply to contact (admin)
```

### Testimonials
```
GET    /api/testimonials              Get approved reviews
POST   /api/testimonials              Submit review
PATCH  /api/testimonials/:id/approve  Approve review (admin)
```

### Admin
```
GET    /api/admin/stats               Dashboard statistics
GET    /api/admin/reservations/recent Recent reservations
```

## 🔧 Tech Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Axios** - HTTP client
- **React Icons** - Icon library

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Nodemailer** - Email service
- **Multer** - File uploads (ready)

### DevOps & Deployment
- Git & GitHub
- Docker (ready for containerization)
- Vercel (Frontend)
- Heroku/Railway (Backend)

## 💾 Database Schema

### Reservation
```javascript
{
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  numberOfGuests: Number,
  reservationDate: Date,
  reservationTime: String,
  occasion: String,
  specialRequests: String,
  status: 'pending|confirmed|cancelled',
  createdAt: Date,
  updatedAt: Date
}
```

### MenuItem
```javascript
{
  name: String,
  category: String,
  description: String,
  price: Number,
  image: String,
  isVegetarian: Boolean,
  isSpicy: Boolean,
  popular: Boolean,
  featured: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

## 🔐 Security Considerations

- ✅ Input validation on all forms
- ✅ CORS enabled for API
- ✅ Environment variables for sensitive data
- ⏳ HTTPS ready (configure for production)
- ⏳ JWT authentication (ready for implementation)
- ⏳ Rate limiting (ready for implementation)
- ⏳ CSRF protection (recommended)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All pages are fully responsive with mobile-first design approach.

## 🚢 Deployment

### Frontend (Vercel)
```bash
npm run build
# Deploy frontend/dist to Vercel
```

### Backend (Heroku/Railway)
```bash
npm start
# Set environment variables in deployment platform
```

### Environment Variables for Production
```
MONGODB_URI=mongodb+srv://...
EMAIL_USER=...
EMAIL_PASS=...
NODE_ENV=production
```

## 📈 Performance Optimization

- ✅ CSS minification via Tailwind
- ✅ Code splitting with React lazy loading
- ✅ Image optimization ready
- ✅ Caching headers configured
- ⏳ CDN integration (CloudFlare)
- ⏳ Database indexing

## 🧪 Testing (Ready for Implementation)

- Unit tests for components
- Integration tests for API
- E2E tests with Cypress
- Load testing with Artillery

## 📞 Contact & Support

**Nana Swahili Restaurant**
- 📍 Westlands Road, Four Greenway, Nairobi, Kenya
- 📞 +254 700 123 456
- 📧 info@nanaswahili.com
- 💬 WhatsApp: +254 700 123 456
- 📸 Instagram: @nanaswahilirestaurant

## 📄 License

MIT License - Feel free to use and modify for your needs.

## 🎉 What's Next?

1. **Customization**
   - Update images and content
   - Adjust colors and branding
   - Add your actual restaurant information

2. **Integration**
   - Connect real MongoDB database
   - Setup email service
   - Integrate payment gateway

3. **Enhancement**
   - Add user authentication
   - Implement review system
   - Setup analytics

4. **Deployment**
   - Deploy frontend to Vercel
   - Deploy backend to Railway/Heroku
   - Setup custom domain

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)

---

**Version**: 1.0.0  
**Last Updated**: June 2024  
**Built with ❤️ for Premium Dining**
