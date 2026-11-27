import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { personalInfo } from "@/data/portfolioData";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    const smtpUser = process.env.EMAIL_USER || process.env.SMTP_USER;
    const smtpPass = process.env.EMAIL_PASS || process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Email service is not configured. Please set EMAIL_USER and EMAIL_PASS in .env.local.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE
        ? process.env.SMTP_SECURE === "true"
        : Number(process.env.SMTP_PORT || 465) === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const to = process.env.CONTACT_TO || personalInfo.email;

    await transporter.sendMail({
      from: `"Portfolio Contact" <${smtpUser}>`,
      to,
      replyTo: email,
      subject: `New contact message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br/>")}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json(
      {
        success: false,
        message: err instanceof Error ? err.message : "Failed to send email.",
      },
      { status: 500 }
    );
  }
}