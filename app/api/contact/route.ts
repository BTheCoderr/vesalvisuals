import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { firstName, lastName, email, service, message, newsletter } = data;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: ['vesalvisuals@gmail.com', 'vesalvisuals@outlook.com'],
      subject: `New ${service} Inquiry from ${firstName}`,
      text: `
New Service Inquiry Details
--------------------------
Name: ${firstName} ${lastName}
Email: ${email}
Service Package: ${service}
Newsletter Signup: ${newsletter ? 'Yes' : 'No'}

Message:
${message}

--------------------------
Sent from Vesal Visuals website
      `.trim(),
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
} 