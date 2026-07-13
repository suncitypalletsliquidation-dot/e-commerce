import { sendEmail, getAdminContactNotificationTemplate, getClientContactConfirmationTemplate } from '@/lib/email';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, subject, message } = body;

    if (!firstName || !email || !subject || !message) {
      return new NextResponse('Missing required fields', { status: 400 });
    }

    // Send admin notification email
    const adminEmails = process.env.ADMIN_EMAILS?.split(",") || [];
    if (adminEmails.length > 0) {
      const adminHtml = getAdminContactNotificationTemplate({
        firstName,
        lastName,
        email,
        phone: phone || "",
        subject,
        message,
      });
      
      await Promise.all(
        adminEmails.map((adminEmail) =>
          sendEmail({
            to: adminEmail.trim(),
            subject: `New Contact Inquiry: ${subject}`,
            html: adminHtml,
          })
        )
      );
    }

    // Send client confirmation email
    const clientHtml = getClientContactConfirmationTemplate({
      firstName,
      lastName: lastName || "",
      subject,
      message,
    });
    
    await sendEmail({
      to: email,
      subject: `We received your message: ${subject}`,
      html: clientHtml,
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error: any) {
    console.error('Error in contact endpoint:', error);
    return NextResponse.json({ success: false, message: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
