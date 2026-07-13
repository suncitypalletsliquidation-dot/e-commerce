import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prismaDB";
import { sendEmail, getOrderStatusUpdateTemplate } from "@/lib/email";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Missing Fields" }, { status: 400 });
  }

  try {
    const isAdmin = session?.user?.role === "ADMIN";
    const orders = await prisma.order.findMany({
      where: isAdmin
        ? {}
        : {
            userEmail: session?.user?.email,
          },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ orders }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Missing Fields" }, { status: 400 });
  }

  try {
    // update the order
    const body = await req.json();
    const { id, status } = body;

    console.log(id, status);

    if (!id || !status) {
      return NextResponse.json({ error: "Missing Fields" }, { status: 400 });
    }

    const order = await prisma.order.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });

    try {
      if (order.userEmail) {
        const emailHtml = getOrderStatusUpdateTemplate(order, status);
        await sendEmail({
          to: order.userEmail,
          subject: `Your order #${order.orderId || order.id} status has been updated to ${status}`,
          html: emailHtml,
        });
      }
    } catch (emailErr) {
      console.error("Failed to send order status update email:", emailErr);
    }

    return NextResponse.json({ order }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
