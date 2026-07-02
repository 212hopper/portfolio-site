import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create Zoho SMTP transporter
const transporter = nodemailer.createTransport({
  host: "smtppro.zoho.eu",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email to you — notification of new contact
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.ZOHO_EMAIL}>`,
      to: process.env.CONTACT_RECIPIENT,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #f0f0f0; padding: 32px; border-radius: 12px;">
          
          <div style="border-bottom: 1px solid #2a2a2a; padding-bottom: 16px; margin-bottom: 24px;">
            <h2 style="color: #3b82f6; margin: 0; font-size: 20px;">
              New Portfolio Contact
            </h2>
          </div>

          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div>
              <p style="color: #888888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 4px 0;">
                From
              </p>
              <p style="color: #f0f0f0; margin: 0; font-size: 15px;">
                ${name}
              </p>
            </div>

            <div>
              <p style="color: #888888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 4px 0;">
                Email
              </p>
              <p style="color: #3b82f6; margin: 0; font-size: 15px;">
                ${email}
              </p>
            </div>

            <div style="background: #141414; border: 1px solid #2a2a2a; border-radius: 8px; padding: 16px; margin-top: 8px;">
              <p style="color: #888888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 8px 0;">
                Message
              </p>
              <p style="color: #f0f0f0; margin: 0; font-size: 15px; line-height: 1.6;">
                ${message.replace(/\n/g, "<br/>")}
              </p>
            </div>
          </div>

          <div style="border-top: 1px solid #2a2a2a; margin-top: 24px; padding-top: 16px;">
            <p style="color: #888888; font-size: 12px; margin: 0;">
              Sent from your portfolio contact form — 
              reply directly to this email to respond to ${name}
            </p>
          </div>

        </div>
      `,
    });

    // Auto reply to sender
    await transporter.sendMail({
      from: `"Phil Hopper" <${process.env.ZOHO_EMAIL}>`,
      to: email,
      subject: "Thanks for getting in touch!",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #f0f0f0; padding: 32px; border-radius: 12px;">
          
          <div style="border-bottom: 1px solid #2a2a2a; padding-bottom: 16px; margin-bottom: 24px;">
            <h2 style="color: #3b82f6; margin: 0; font-size: 20px;">
              Thanks for reaching out, ${name}!
            </h2>
          </div>

          <p style="color: #888888; line-height: 1.6; margin: 0 0 16px 0;">
            I've received your message and will get back to you as soon as possible.
          </p>

          <div style="background: #141414; border: 1px solid #2a2a2a; border-radius: 8px; padding: 16px; margin: 24px 0;">
            <p style="color: #888888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 8px 0;">
              Your Message
            </p>
            <p style="color: #f0f0f0; margin: 0; font-size: 14px; line-height: 1.6;">
              ${message.replace(/\n/g, "<br/>")}
            </p>
          </div>

          <p style="color: #888888; line-height: 1.6; margin: 0;">
            In the meantime feel free to connect with me on 
            <a href="${process.env.NEXT_PUBLIC_LINKEDIN}" style="color: #3b82f6;">LinkedIn</a>.
          </p>

          <div style="border-top: 1px solid #2a2a2a; margin-top: 24px; padding-top: 16px;">
            <p style="color: #888888; font-size: 12px; margin: 0;">
              Phil Hopper — Broadcast Engineer
            </p>
          </div>

        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}