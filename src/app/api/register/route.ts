import bcrypt from "bcrypt";
import { prisma } from "@/lib/prismaDB";
import { NextResponse } from "next/server";
import { sendEmail, getWelcomeEmailTemplate } from "@/lib/email";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, password } = body;

  if (!name || !email || !password) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  const formatedEmail = email.toLowerCase();

  const exist = await prisma.user.findUnique({
    where: {
      email: formatedEmail,
    },
  });

  if (exist) {
    throw new Error("Email already exists");
  }

  const adminEmails = process.env.ADMIN_EMAILS?.split(",") || [];

  // Function to check if an email is in the list of admin emails
  function isAdminEmail(email: string) {
    return adminEmails.includes(email);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    name,
    email: formatedEmail,
    password: hashedPassword,
    role: "USER",
  };

  if (isAdminEmail(formatedEmail)) {
    newUser.role = "ADMIN";
  }

  try {
    const user = await prisma.user.create({
      data: {
        ...newUser,
      },
    });

    // Send welcome email
    try {
      const welcomeHtml = getWelcomeEmailTemplate(user.name || "", user.email || "");
      await sendEmail({
        to: user.email!,
        subject: "Welcome to Amazon Liquidation Express!",
        html: welcomeHtml,
      });
    } catch (emailErr) {
      console.error("Failed to send welcome email:", emailErr);
    }

    return NextResponse.json(user);
  } catch (error) {
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
