
# Setup & Installation Guide

## Quick Start

### Prerequisites
- Node.js v16+ and npm
- MongoDB (local or MongoDB Atlas)
- Git

## Installation Steps

### 1. Clone or Extract the Project
```bash
cd nana-restaurant-website
```

### 2. Install Root Dependencies
```bash
npm install
```

### 3. Setup Backend

#### Install Backend Dependencies
```bash
cd backend
npm install
```

#### Configure Environment Variables
Create a `.env` file in the `backend` folder:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/nana-restaurant
JWT_SECRET=your_super_secret_jwt_key_here_change_in_production
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
WHATSAPP_NUMBER=+254712345678
NODE_ENV=development
```

**For Gmail:**
1. Enable 2-factor authentication on your Gmail account
2. Go to myaccount.google.com/apppasswords
3. Generate an app-specific password
4. Use this password as `EMAIL_PASS`

### 4. Setup Frontend

#### Install Frontend Dependencies
```bash
cd frontend
npm install
```

#### Create Frontend Environment (Optional)
Create a `.env` file in the `frontend` folder:
```env
VITE_API_URL=http://localhost:5000
```

### 5. Setup MongoDB

#### Option A: Local MongoDB
```bash
# Start MongoDB locally
mongod
```

#### Option B: MongoDB Atlas (Cloud)
1. Create account at mongodb.com/cloud
2. Create a cluster
3. Get connection string
4. Add connection string to `backend/.env` as `MONGODB_URI`

## Running the Application

### Development Mode (Both Frontend & Backend)
```bash
npm run dev
```

This will start:
- Backend server: http://localhost:5000
- Frontend development: http://localhost:3000

### Run Separately

#### Terminal 1 - Backend
```bash
npm run dev:backend
```

#### Terminal 2 - Frontend
```bash
cd frontend
npm run dev
```

## Accessing the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health
- **Admin Dashboard**: http://localhost:3000/admin

## Database Seeding

To populate the database with sample data:

```bash
cd backend
npm run seed
```

This will add sample menu items, gallery images, and testimonials.

## Common Issues & Solutions

### MongoDB Connection Error
- Ensure MongoDB is running (`mongod`)
- Check MongoDB URI in `.env`
- For Atlas, ensure IP whitelist includes your machine

### Port Already in Use
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Email Not Sending
- Ensure Gmail app password is correct
- Check spam folder
- Verify `EMAIL_USER` and `EMAIL_PASS` in `.env`

### Tailwind CSS Not Applying
```bash
cd frontend
npm install
npm run dev
```

## Building for Production

### Frontend Build
```bash
cd frontend
npm run build
```

Output will be in `frontend/dist/`

### Backend Deployment
```bash
npm start
```

## API Endpoints

### Reservations
- `GET /api/reservations` - Get all reservations
- `POST /api/reservations` - Create reservation
- `GET /api/reservations/:id` - Get specific reservation
- `PATCH /api/reservations/:id` - Update reservation
- `DELETE /api/reservations/:id` - Cancel reservation

### Menu
- `GET /api/menu` - Get all menu items
- `GET /api/menu?category=seafood` - Filter by category
- `GET /api/menu/:id` - Get specific item
- `POST /api/menu` - Add menu item (admin)
- `PATCH /api/menu/:id` - Update item (admin)
- `DELETE /api/menu/:id` - Delete item (admin)

### Gallery
- `GET /api/gallery` - Get all gallery items
- `GET /api/gallery/:id` - Get specific item
- `POST /api/gallery` - Add image (admin)
- `PATCH /api/gallery/:id` - Update item (admin)
- `DELETE /api/gallery/:id` - Delete item (admin)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin)
- `PATCH /api/contact/:id/read` - Mark as read (admin)
- `PATCH /api/contact/:id/reply` - Reply to contact (admin)

### Testimonials
- `GET /api/testimonials` - Get approved testimonials
- `POST /api/testimonials` - Submit testimonial
- `PATCH /api/testimonials/:id/approve` - Approve (admin)
- `PATCH /api/testimonials/:id/feature` - Feature (admin)

### Admin
- `GET /api/admin/stats` - Dashboard statistics
- `GET /api/admin/reservations/recent` - Recent reservations

## Features Status

- ✅ Home page with hero section
- ✅ Menu browsing with filtering
- ✅ Online reservations
- ✅ Gallery with lightbox
- ✅ Contact form
- ✅ Admin dashboard
- ✅ Responsive design
- ✅ Email notifications
- ⏳ WhatsApp integration (API ready)
- ⏳ Instagram feed (API ready)
- ⏳ Payment integration (not included)
- ⏳ User authentication (ready for implementation)

## Next Steps for Production

1. **Add Authentication**
   - JWT login for admin panel
   - User registration (optional)

2. **Setup Payment Gateway**
   - Stripe or Mpesa integration
   - Order/checkout system

3. **Optimize Images**
   - Use next-gen formats (WebP)
   - Implement lazy loading

4. **Setup CDN**
   - CloudFlare for static assets
   - Faster image delivery

5. **Add Caching**
   - Redis for session management
   - Cache API responses

6. **Monitor & Analytics**
   - Google Analytics
   - Error tracking (Sentry)

7. **SSL Certificate**
   - HTTPS for security
   - Auto-renew with Let's Encrypt

## Support & Customization

For custom features or integration support:
- 📧 Email: info@nanaswahili.com
- 📞 Phone: +254 700 123 456
- 💬 WhatsApp: +254 700 123 456

---

Enjoy your premium restaurant website! 🍽️✨
