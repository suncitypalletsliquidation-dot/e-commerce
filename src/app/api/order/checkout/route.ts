import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prismaDB";
import {
  sendEmail,
  getClientOrderConfirmationTemplate,
  getAdminOrderNotificationTemplate,
} from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      orderId,
      status,
      totalPrice,
      userId,
      userEmail,
      productQuantity,
      orderTitle,
      country,
      city,
      postalCode,
      line1,
      line2,
      products,
      firstName,
      lastName,
      phone,
      paymentMethod,
      notes,
    } = body;

    // Basic validation
    if (
      !orderId ||
      !status ||
      !userEmail ||
      !productQuantity ||
      !country ||
      !city ||
      !products
    ) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const order = await prisma.order.create({
      data: {
        orderId,
        status,
        totalPrice,
        userId,
        userEmail,
        productQuantity,
        orderTitle,
        country,
        city,
        postalCode,
        line1,
        line2,
        products,
        firstName,
        lastName,
        phone,
        paymentMethod,
        notes,
      },
    });

    // Send customer confirmation email
    try {
      const clientHtml = getClientOrderConfirmationTemplate(order);
      await sendEmail({
        to: userEmail,
        subject: `Your order #${orderId} has been received!`,
        html: clientHtml,
      });
    } catch (emailErr) {
      console.error("Failed to send client order confirmation email:", emailErr);
    }

    // Send admin notification email(s)
    try {
      const adminEmails = process.env.ADMIN_EMAILS?.split(",") || [];
      if (adminEmails.length > 0) {
        const adminHtml = getAdminOrderNotificationTemplate(order);
        await Promise.all(
          adminEmails.map((adminEmail) =>
            sendEmail({
              to: adminEmail.trim(),
              subject: `New Order #${orderId} - Action Required`,
              html: adminHtml,
            })
          )
        );
      }
    } catch (emailErr) {
      console.error("Failed to send admin order notification email:", emailErr);
    }

    return NextResponse.json(
      { success: true, message: "Order created successfully", order },
      { status: 201 }
    );
  } catch (error: any) {
    console.log(error?.stack || error, 'error in create order route')
    return NextResponse.json(
      { success: false, message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}