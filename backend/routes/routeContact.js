// contactRoute.js
import express from "express";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
 const result = await resend.emails.send({
      from: "Healthoraa <send@healthoraa.in>",
      to: ["healthoraa.health@gmail.com"],
      subject: "New message",
       html: `
    <h2>New user message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `,
    });
    console.log("RESEND RESULT:", result);

    res.json({ success: true });
    res.status(200).json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (err) {
    console.error("Resend error:", err);
    res.status(500).json({
      success: false,
      message: "Email failed to send",
    });
  }
});

export default router;
