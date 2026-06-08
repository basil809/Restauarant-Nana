import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendReservationEmail = async (reservation) => {
  const { firstName, lastName, email, numberOfGuests, reservationDate, reservationTime } = reservation;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Reservation Confirmed - Nana Swahili Restaurant',
    html: `
      <div style="font-family: 'Lato', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0F0F0F; color: #F5F1E8;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #D4AF37; font-size: 28px; margin: 0;">Nana Swahili Restaurant</h1>
          <p style="color: #C67C1D; font-size: 14px;">Experience Authentic Swahili Fine Dining</p>
        </div>

        <div style="background-color: #1a1a1a; padding: 30px; border-left: 4px solid #D4AF37; border-radius: 5px;">
          <h2 style="color: #D4AF37; margin-top: 0;">Your Reservation is Confirmed! 🎉</h2>

          <p>Dear ${firstName} ${lastName},</p>

          <p>Thank you for choosing <strong>Nana Swahili Restaurant</strong>. We're excited to welcome you for an unforgettable dining experience.</p>

          <div style="background-color: #0F0F0F; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #D4AF37; margin-top: 0;">Reservation Details:</h3>
            <p style="margin: 10px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p style="margin: 10px 0;"><strong>Date:</strong> ${new Date(reservationDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p style="margin: 10px 0;"><strong>Time:</strong> ${reservationTime}</p>
            <p style="margin: 10px 0;"><strong>Number of Guests:</strong> ${numberOfGuests} ${numberOfGuests === 1 ? 'Person' : 'People'}</p>
          </div>

          <p>Please arrive 10 minutes early to ensure a smooth check-in. If you need to modify your reservation, please call us at <strong>+254 700 123 456</strong> or reply to this email.</p>

          <hr style="border: none; border-top: 1px solid #D4AF37; margin: 30px 0;">

          <div style="background-color: #0F0F0F; padding: 20px; border-radius: 5px;">
            <h3 style="color: #D4AF37; margin-top: 0;">Restaurant Information:</h3>
            <p style="margin: 10px 0;">
              <strong>Location:</strong> Westlands Road, Four Greenway, Nairobi, Kenya<br>
              <strong>Phone:</strong> +254 700 123 456<br>
              <strong>WhatsApp:</strong> +254 700 123 456<br>
              <strong>Hours:</strong> Daily 11 AM – 10 PM
            </p>
          </div>

          <p style="margin-top: 30px; font-size: 12px; color: #8B6F47;">
            For any questions, contact us at info@nanaswahili.com or visit our website.
          </p>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #D4AF37;">
            <p style="color: #C67C1D; font-size: 12px; margin: 0;">
              Follow us on Instagram: <strong>@nanaswahilirestaurant</strong>
            </p>
          </div>
        </div>

        <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #8B6F47;">
          <p>© 2024 Nana Swahili Restaurant. All rights reserved.</p>
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};

export const sendContactEmail = async (contact) => {
  const { name, email, subject, message, category } = contact;

  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Contact Message - ${subject}`,
    html: `
      <h2>New Contact Message from Nana Swahili Restaurant Website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Category:</strong> ${category}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p style="color: #666; font-size: 12px;">Reply to this contact at ${email}</p>
    `,
  };

  return transporter.sendMail(adminMailOptions);
};

export const sendTestEmail = async (to) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: 'Test Email - Nana Swahili Restaurant',
    html: '<h1>This is a test email</h1><p>Email configuration is working correctly!</p>',
  };

  return transporter.sendMail(mailOptions);
};
