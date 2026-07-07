import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("Resend API key is not configured. Please add RESEND_API_KEY to your environment variables.");
    }
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, phone, inquiry, message } = await request.json();

    if (!name || !email || !phone || !inquiry) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const senderEmail = process.env.RESEND_SENDER_EMAIL || "onboarding@resend.dev";
    const adminEmail = process.env.RESEND_ADMIN_EMAIL || "hello@aartifurniture.com";

    // 1. Send notification to Business Admin
    await resend.emails.send({
      from: `Aarti Furniture Lead <${senderEmail}>`,
      to: adminEmail,
      subject: `New Lead: ${inquiry} Inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #111;">
          <h2 style="color: #cea86f; margin-bottom: 20px;">New Enquiry Received</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 10px 0;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0;">${email}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 10px 0;">${phone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold;">Inquiry For:</td>
              <td style="padding: 10px 0;">${inquiry}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Message:</td>
              <td style="padding: 10px 0; white-space: pre-wrap;">${message || "No message provided."}</td>
            </tr>
          </table>
        </div>
      `,
    });

    // 2. Send automated Thank You reply to the user
    // Note: If using Resend free tier without a verified domain, sending to external emails will fail.
    // We catch and handle it gracefully to not crash the form success flow for testing.
    try {
      await resend.emails.send({
        from: `Aarti Furniture <${senderEmail}>`,
        to: email,
        subject: "Thank you for contacting Aarti Furniture!",
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6;">
            <h3 style="color: #cea86f; font-size: 20px;">Dear ${name},</h3>
            <p>Thank you for reaching out to Aarti Furniture. We have received your inquiry regarding <strong>${inquiry}</strong>.</p>
            <p>Our team of space planning and furniture specialists will review your requirements and get in touch with you shortly.</p>
            <p>If you have any urgent requests, feel free to contact us directly at <strong>+91 63753 45407</strong>.</p>
            <br/>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 13px; color: #777;">
              Best regards,<br/>
              <strong>Aarti Furniture Team</strong><br/>
              Jaipur, Rajasthan, India
            </p>
          </div>
        `,
      });
    } catch (replyError) {
      console.warn("Could not send user auto-reply email. Domain might not be verified on Resend yet.", replyError);
    }

    return NextResponse.json({ success: true, message: "Enquiry submitted successfully." });
  } catch (error: any) {
    console.error("Resend API Route Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process enquiry." },
      { status: 500 }
    );
  }
}
