import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  // 1. Create a transporter
  // Use your Gmail or SMTP details from your .env file
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Use an "App Password" if using Gmail
    },
  });

  try {
    // 2. Send the email
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // Where you want to receive the messages
      subject: `New Contact Form: ${subject}`,
      html: `
        <h3>New Message from MF2001 Website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p><strong>Regards</strong></p>
        <p>Website Team</p>
      `,
    });

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to send email." });
  }
}
