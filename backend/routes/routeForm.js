// contactRoute.js
import express from "express";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Route for sending email
router.post("/", async (req, res) => {
  const {name, number, email, age, hometown } = req.body;

  console.log("CONTACT API HIT");
  console.log("API KEY EXISTS:", !!process.env.RESEND_API_KEY);

  try {
    const result = await resend.emails.send({
      from: "Healthoraa <send@healthoraa.in>",
      to: ["healthoraa.health@gmail.com"],
      subject: "User details",
       html: `
    <h2>New user details</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Contact number:</strong> ${number}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Hometown:</strong> ${hometown}</p>
  `,
    });

    console.log("RESEND RESULT:", result);

    res.json({ success: true });
  } catch (err) {
    console.error("RESEND ERROR:", err);
    res.status(500).json({ success: false });
  }
});


export default router;
