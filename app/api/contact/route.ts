import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { firstName, lastName, email, service, message, newsletter } = data;

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email content
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `New ${service} Inquiry from ${firstName}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Service Package: ${service}
Newsletter Signup: ${newsletter ? 'Yes' : 'No'}

Message:
${message}

--------------------------
Sent from Vesal Visuals website contact form
      `.trim(),
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again or contact us directly.' }, 
      { status: 500 }
    );
  }
} 