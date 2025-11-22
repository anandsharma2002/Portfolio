const nodemailer = require('nodemailer');

// This function will be the serverless function handler
export default function handler(req, res) {
  // We only want to handle POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Securely get credentials from environment variables
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address from .env.local
      pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail app password from .env.local
    },
  });

  // Get data from the request body sent by the form
  const { user_name, user_email, message } = req.body;

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`, // sender address
    to: process.env.GMAIL_USER, // list of receivers (send to yourself)
    subject: `New Message from ${user_name}`, // Subject line
    text: `You have a new message from ${user_name} (${user_email}):\n\n${message}`, // plain text body
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${user_name}</p>
      <p><strong>Email:</strong> ${user_email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `, // html body
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error sending email', error: error.message });
    }
    return res.status(200).json({ message: 'Email sent successfully' });
  });
}