import nodemailer from "nodemailer";

type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

const port = parseInt(process.env.EMAIL_SERVER_PORT || "2525");
const secure = port === 465;

const smtpOptions = {
  host: process.env.EMAIL_SERVER_HOST,
  port,
  secure,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
};

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  return await transporter.sendMail({
    from: process.env.EMAIL_FROM || "onboarding@resend.dev",
    ...data,
  });
};

export const formatEmail = (email: string) => {
  return email.replace(/\s+/g, "").toLowerCase().trim();
};

/**
 * Common HTML wrapper layout for emails.
 */
const getEmailWrapper = (content: string, footerText: string = "SUNCITY PALLETS LIQUIDATION STORE LLC") => {
  return `
    <div style="background-color: #f3f4f6; padding: 40px 10px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; color: #1f2937; line-height: 1.6;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); border: 1px solid #e5e7eb;">
        ${content}
        <div style="background-color: #f9fafb; padding: 20px 40px; text-align: center; border-top: 1px solid #f3f4f6; font-size: 12px; color: #9ca3af;">
          ${footerText} — Built with love
        </div>
      </div>
    </div>
  `;
};

/**
 * 1. User Welcome Email HTML
 */
export const getWelcomeEmailTemplate = (name: string, email: string) => {
  const content = `
    <div style="padding: 30px 40px 10px 40px;">
      <p style="color: #a855f7; font-size: 13px; font-weight: 600; text-transform: uppercase; margin: 0 0 10px 0; letter-spacing: 0.05em;">SUNCITY PALLETS LIQUIDATION STORE LLC</p>
      <h1 style="font-size: 26px; font-weight: 700; color: #111827; margin: 0; line-height: 1.2;">Welcome to SUNCITY PALLETS LIQUIDATION STORE LLC</h1>
    </div>
    <div style="padding: 20px 40px 40px 40px;">
      <p style="margin: 0 0 20px 0; font-size: 16px; color: #374151;">Hi ${name || "there"},</p>
      <p style="margin: 0 0 20px 0; font-size: 15px; color: #4b5563;">Thanks for creating an account on SUNCITY PALLETS LIQUIDATION STORE LLC. Here's a copy of your user details:</p>
      
      <div style="background-color: #f9fafb; border-radius: 8px; padding: 20px; border: 1px solid #f3f4f6; margin-bottom: 25px;">
        <span style="font-size: 15px; color: #4b5563;">Username: <strong style="color: #111827;">${email}</strong></span>
      </div>

      <p style="margin: 0 0 25px 0; font-size: 15px; color: #4b5563;">You can access your account area to view orders, change your password, and more via the link below:</p>
      
      <a href="${process.env.SITE_URL || "http://localhost:3000"}/my-account" target="_blank" style="display: inline-block; background-color: #a855f7; color: #ffffff; padding: 12px 28px; border-radius: 9999px; text-decoration: none; font-weight: 500; font-size: 15px; text-align: center; box-shadow: 0 2px 4px rgba(168, 85, 247, 0.2);">My account</a>
      
      <p style="margin: 30px 0 0 0; font-size: 15px; color: #374151;">We look forward to seeing you soon.</p>
    </div>
  `;
  return getEmailWrapper(content);
};

/**
 * Get display label for payment method code.
 */
const getPaymentLabel = (method: string) => {
  switch (method?.toLowerCase()) {
    case "zelle":
      return "Zelle";
    case "cashapp":
      return "CashApp";
    case "bitcoin":
    case "altcoin":
      return "Bitcoin/Altcoin";
    default:
      return method || "Agent Payment";
  }
};

/**
 * 2. Order Confirmation Email HTML (Client Copy)
 */
export const getClientOrderConfirmationTemplate = (order: any) => {
  const paymentLabel = getPaymentLabel(order.paymentMethod);
  const products = Array.isArray(order.products) ? order.products : [];
  
  let productsListHTML = "";
  products.forEach((p: any) => {
    const attrs = [p.color && `Color: ${p.color}`, p.size && `Size: ${p.size}`, p.attribute && `Attr: ${p.attribute}`]
      .filter(Boolean)
      .join(", ");
    
    productsListHTML += `
      <tr style="border-bottom: 1px solid #f3f4f6;">
        <td style="padding: 12px 0; color: #111827; font-weight: 500;">
          ${p.name}<br />
          ${attrs ? `<span style="font-size: 12px; color: #9ca3af;">${attrs}</span>` : ""}
        </td>
        <td style="padding: 12px 0; text-align: center; color: #4b5563;">x${p.quantity}</td>
        <td style="padding: 12px 0; text-align: right; color: #111827;">$${((p.price * p.quantity) / 100).toFixed(2)}</td>
      </tr>
    `;
  });

  const totalUSD = (order.totalPrice / 100).toFixed(2);
  const billingName = `${order.firstName || ""} ${order.lastName || ""}`.trim() || order.userEmail;
  const orderDate = new Date(order.createdAt || new Date()).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const content = `
    <div style="padding: 30px 40px 10px 40px;">
      <p style="color: #a855f7; font-size: 13px; font-weight: 600; text-transform: uppercase; margin: 0 0 10px 0; letter-spacing: 0.05em;">SUNCITY PALLETS LIQUIDATION STORE LLC</p>
      <h1 style="font-size: 26px; font-weight: 700; color: #111827; margin: 0; line-height: 1.2;">Thank you for your order</h1>
    </div>
    <div style="padding: 20px 40px 40px 40px;">
      <p style="margin: 0 0 20px 0; font-size: 16px; color: #374151;">Hi ${order.firstName || "Customer"},</p>
      <p style="margin: 0 0 20px 0; font-size: 15px; color: #4b5563; line-height: 1.6;">We've received your order and it's currently on hold until we can confirm your payment has been processed.</p>
      <p style="margin: 0 0 25px 0; font-size: 15px; color: #4b5563; line-height: 1.6;">Here's a reminder of what you've ordered:</p>
      
      <div style="background-color: #faf5ff; border-left: 4px solid #a855f7; padding: 15px; border-radius: 4px; margin-bottom: 30px; font-size: 15px; color: #6b21a8; line-height: 1.5;">
        <strong>${paymentLabel} Detail</strong> will be sent to you by our agent once your order has been received.
      </div>

      <h2 style="font-size: 18px; font-weight: 600; color: #111827; margin: 0 0 15px 0; border-bottom: 2px solid #f3f4f6; padding-bottom: 8px;">Order summary</h2>
      <p style="font-size: 13px; color: #9ca3af; margin: -10px 0 20px 0;">Order #${order.orderId} (${orderDate})</p>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px; font-size: 14px;">
        <thead>
          <tr style="border-bottom: 2px solid #e5e7eb; text-align: left;">
            <th style="padding: 10px 0; color: #4b5563; font-weight: 600;">Product</th>
            <th style="padding: 10px 0; color: #4b5563; font-weight: 600; text-align: center;">Quantity</th>
            <th style="padding: 10px 0; color: #4b5563; font-weight: 600; text-align: right;">Price</th>
          </tr>
        </thead>
        <tbody>
          ${productsListHTML}
        </tbody>
        <tfoot>
          <tr style="border-top: 1px solid #e5e7eb;">
            <td colspan="2" style="padding: 10px 0; color: #4b5563;">Subtotal:</td>
            <td style="padding: 10px 0; text-align: right; color: #111827;">$${totalUSD}</td>
          </tr>
          <tr style="border-top: 1px solid #f3f4f6;">
            <td colspan="2" style="padding: 10px 0; color: #4b5563; font-weight: 700; font-size: 16px;">Total:</td>
            <td style="padding: 10px 0; text-align: right; color: #111827; font-weight: 700; font-size: 20px;">$${totalUSD}</td>
          </tr>
          <tr style="border-top: 1px solid #f3f4f6;">
            <td colspan="2" style="padding: 10px 0; color: #4b5563;">Payment method:</td>
            <td style="padding: 10px 0; text-align: right; color: #111827; font-weight: 500;">${paymentLabel}</td>
          </tr>
        </tfoot>
      </table>

      <h2 style="font-size: 18px; font-weight: 600; color: #111827; margin: 30px 0 15px 0; border-bottom: 2px solid #f3f4f6; padding-bottom: 8px;">Billing address</h2>
      <div style="background-color: #f9fafb; border-radius: 8px; padding: 20px; border: 1px solid #f3f4f6; font-size: 14px; color: #4b5563; line-height: 1.6;">
        <strong style="color: #111827; font-size: 15px;">${billingName}</strong><br />
        ${order.line1 || ""}${order.line2 ? `, ${order.line2}` : ""}<br />
        ${order.city || ""}${order.postalCode ? `, ${order.postalCode}` : ""}<br />
        ${order.country || ""}<br />
        Phone: <a href="tel:${order.phone}" style="color: #a855f7; text-decoration: none;">${order.phone || "N/A"}</a><br />
        Email: <a href="mailto:${order.userEmail}" style="color: #a855f7; text-decoration: none;">${order.userEmail}</a>
      </div>

      <p style="margin: 40px 0 0 0; font-size: 14px; color: #6b7280; text-align: center; line-height: 1.5;">
        Thanks again! If you need any help with your order, please contact us at <a href="mailto:info@suncitypalletsliquidation.com" style="color: #a855f7; text-decoration: none; font-weight: 500;">info@suncitypalletsliquidation.com</a>.
      </p>
    </div>
  `;
  return getEmailWrapper(content);
};

/**
 * 3. Order Notification Email HTML (Admin Copy)
 */
export const getAdminOrderNotificationTemplate = (order: any) => {
  const paymentLabel = getPaymentLabel(order.paymentMethod);
  const products = Array.isArray(order.products) ? order.products : [];
  
  let productsListHTML = "";
  products.forEach((p: any) => {
    const attrs = [p.color && `Color: ${p.color}`, p.size && `Size: ${p.size}`, p.attribute && `Attr: ${p.attribute}`]
      .filter(Boolean)
      .join(", ");
    
    productsListHTML += `
      <tr style="border-bottom: 1px solid #f3f4f6;">
        <td style="padding: 12px 0; color: #111827; font-weight: 500;">
          ${p.name}<br />
          ${attrs ? `<span style="font-size: 12px; color: #9ca3af;">${attrs}</span>` : ""}
        </td>
        <td style="padding: 12px 0; text-align: center; color: #4b5563;">x${p.quantity}</td>
        <td style="padding: 12px 0; text-align: right; color: #111827;">$${((p.price * p.quantity) / 100).toFixed(2)}</td>
      </tr>
    `;
  });

  const totalUSD = (order.totalPrice / 100).toFixed(2);
  const billingName = `${order.firstName || ""} ${order.lastName || ""}`.trim() || order.userEmail;
  const orderDate = new Date(order.createdAt || new Date()).toLocaleString("en-US");

  const notesHTML = order.notes
    ? `
      <h2 style="font-size: 16px; font-weight: 600; color: #111827; margin: 25px 0 10px 0;">Customer Notes:</h2>
      <div style="background-color: #fffbeb; border: 1px solid #fde68a; border-radius: 6px; padding: 15px; font-size: 14px; color: #78350f; margin-bottom: 25px;">
        ${order.notes}
      </div>
    `
    : "";

  const content = `
    <div style="padding: 30px 40px 10px 40px;">
      <p style="color: #ef4444; font-size: 13px; font-weight: 600; text-transform: uppercase; margin: 0 0 10px 0; letter-spacing: 0.05em;">New Order Received</p>
      <h1 style="font-size: 26px; font-weight: 700; color: #111827; margin: 0; line-height: 1.2;">Order #${order.orderId}</h1>
    </div>
    <div style="padding: 20px 40px 40px 40px;">
      <p style="margin: 0 0 25px 0; font-size: 15px; color: #374151;">A new order has been placed by <strong>${billingName}</strong>. Please see processing requirements below:</p>
      
      <div style="background-color: #fee2e2; border-left: 4px solid #ef4444; padding: 15px; border-radius: 4px; margin-bottom: 30px; font-size: 15px; color: #991b1b; line-height: 1.5;">
        <strong>Immediate Action Required:</strong> Contact the client via phone at <a href="tel:${order.phone}" style="color: #ef4444; font-weight: bold; text-decoration: underline;">${order.phone || "N/A"}</a> to give them instructions for sending payment via <strong>${paymentLabel}</strong>.
      </div>

      <h2 style="font-size: 18px; font-weight: 600; color: #111827; margin: 0 0 15px 0; border-bottom: 2px solid #f3f4f6; padding-bottom: 8px;">Order Details</h2>
      <p style="font-size: 13px; color: #9ca3af; margin: -10px 0 20px 0;">Placed at: ${orderDate}</p>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px; font-size: 14px;">
        <thead>
          <tr style="border-bottom: 2px solid #e5e7eb; text-align: left;">
            <th style="padding: 10px 0; color: #4b5563; font-weight: 600;">Product</th>
            <th style="padding: 10px 0; color: #4b5563; font-weight: 600; text-align: center;">Quantity</th>
            <th style="padding: 10px 0; color: #4b5563; font-weight: 600; text-align: right;">Price</th>
          </tr>
        </thead>
        <tbody>
          ${productsListHTML}
        </tbody>
        <tfoot>
          <tr style="border-top: 1px solid #e5e7eb;">
            <td colspan="2" style="padding: 10px 0; color: #4b5563;">Subtotal:</td>
            <td style="padding: 10px 0; text-align: right; color: #111827;">$${totalUSD}</td>
          </tr>
          <tr style="border-top: 1px solid #f3f4f6;">
            <td colspan="2" style="padding: 10px 0; color: #4b5563; font-weight: 700; font-size: 16px;">Total:</td>
            <td style="padding: 10px 0; text-align: right; color: #111827; font-weight: 700; font-size: 20px;">$${totalUSD}</td>
          </tr>
          <tr style="border-top: 1px solid #f3f4f6;">
            <td colspan="2" style="padding: 10px 0; color: #4b5563;">Payment method:</td>
            <td style="padding: 10px 0; text-align: right; color: #111827; font-weight: 600; text-transform: uppercase;">${paymentLabel}</td>
          </tr>
        </tfoot>
      </table>

      ${notesHTML}

      <h2 style="font-size: 18px; font-weight: 600; color: #111827; margin: 30px 0 15px 0; border-bottom: 2px solid #f3f4f6; padding-bottom: 8px;">Customer Contact & Billing</h2>
      <div style="background-color: #f9fafb; border-radius: 8px; padding: 20px; border: 1px solid #f3f4f6; font-size: 14px; color: #4b5563; line-height: 1.6;">
        <strong style="color: #111827; font-size: 15px;">${billingName}</strong><br />
        ${order.line1 || ""}${order.line2 ? `, ${order.line2}` : ""}<br />
        ${order.city || ""}${order.postalCode ? `, ${order.postalCode}` : ""}<br />
        ${order.country || ""}<br />
        Phone: <strong style="color: #111827;">${order.phone || "N/A"}</strong><br />
        Email: <a href="mailto:${order.userEmail}" style="color: #a855f7; text-decoration: none;">${order.userEmail}</a>
      </div>
    </div>
  `;
  return getEmailWrapper(content, "Admin Order Notification");
};

/**
 * 4. Contact Form Notification Email HTML (Admin Copy)
 */
export const getAdminContactNotificationTemplate = (data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) => {
  const name = `${data.firstName || ""} ${data.lastName || ""}`.trim();
  const content = `
    <div style="padding: 30px 40px 10px 40px;">
      <p style="color: #3b82f6; font-size: 13px; font-weight: 600; text-transform: uppercase; margin: 0 0 10px 0; letter-spacing: 0.05em;">New Contact Inquiry</p>
      <h1 style="font-size: 26px; font-weight: 700; color: #111827; margin: 0; line-height: 1.2;">Message Received</h1>
    </div>
    <div style="padding: 20px 40px 40px 40px;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px; font-size: 14px;">
        <tr style="border-bottom: 1px solid #f3f4f6;">
          <td style="padding: 10px 0; color: #4b5563; font-weight: 600; width: 120px;">Sender Name:</td>
          <td style="padding: 10px 0; color: #111827;">${name}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f3f4f6;">
          <td style="padding: 10px 0; color: #4b5563; font-weight: 600;">Email:</td>
          <td style="padding: 10px 0; color: #111827;"><a href="mailto:${data.email}" style="color: #3b82f6; text-decoration: none;">${data.email}</a></td>
        </tr>
        <tr style="border-bottom: 1px solid #f3f4f6;">
          <td style="padding: 10px 0; color: #4b5563; font-weight: 600;">Phone:</td>
          <td style="padding: 10px 0; color: #111827;"><a href="tel:${data.phone}" style="color: #3b82f6; text-decoration: none;">${data.phone || "N/A"}</a></td>
        </tr>
        <tr style="border-bottom: 1px solid #f3f4f6;">
          <td style="padding: 10px 0; color: #4b5563; font-weight: 600;">Subject:</td>
          <td style="padding: 10px 0; color: #111827; font-weight: bold;">${data.subject}</td>
        </tr>
      </table>

      <h2 style="font-size: 16px; font-weight: 600; color: #111827; margin: 20px 0 10px 0;">Message Content:</h2>
      <div style="background-color: #f9fafb; border-radius: 8px; padding: 20px; border: 1px solid #f3f4f6; font-size: 14px; color: #374151; white-space: pre-wrap; line-height: 1.6;">
        ${data.message}
      </div>
    </div>
  `;
  return getEmailWrapper(content, "Admin Contact System");
};

/**
 * 5. Contact Form Confirmation Email HTML (Client Copy)
 */
export const getClientContactConfirmationTemplate = (data: {
  firstName: string;
  lastName: string;
  subject: string;
  message: string;
}) => {
  const content = `
    <div style="padding: 30px 40px 10px 40px;">
      <p style="color: #3b82f6; font-size: 13px; font-weight: 600; text-transform: uppercase; margin: 0 0 10px 0; letter-spacing: 0.05em;">SUNCITY PALLETS LIQUIDATION STORE LLC</p>
      <h1 style="font-size: 26px; font-weight: 700; color: #111827; margin: 0; line-height: 1.2;">We've received your message</h1>
    </div>
    <div style="padding: 20px 40px 40px 40px;">
      <p style="margin: 0 0 20px 0; font-size: 16px; color: #374151;">Hi ${data.firstName || "there"},</p>
      <p style="margin: 0 0 20px 0; font-size: 15px; color: #4b5563; line-height: 1.6;">Thank you for contacting us. We have received your inquiry regarding <strong>"${data.subject}"</strong>, and our team will get back to you shortly.</p>
      
      <p style="margin: 0 0 10px 0; font-size: 14px; color: #9ca3af;">Here is a copy of your message:</p>
      <div style="background-color: #f9fafb; border-radius: 8px; padding: 20px; border: 1px solid #f3f4f6; font-size: 14px; color: #4b5563; white-space: pre-wrap; line-height: 1.6;">
        ${data.message}
      </div>
    </div>
  `;
  return getEmailWrapper(content);
};

/**
 * 6. Order Status Update Email HTML (Client Copy)
 */
export const getOrderStatusUpdateTemplate = (order: any, newStatus: string) => {
  const orderDate = new Date(order.createdAt || new Date()).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case "delivered":
        return "#10b981"; // green
      case "processing":
        return "#eab308"; // yellow
      case "cancelled":
      case "cancel":
        return "#ef4444"; // red
      case "on-hold":
        return "#f97316"; // orange
      default:
        return "#a855f7"; // purple
    }
  };

  const statusColor = getStatusColor(newStatus);

  const content = `
    <div style="padding: 30px 40px 10px 40px;">
      <p style="color: #a855f7; font-size: 13px; font-weight: 600; text-transform: uppercase; margin: 0 0 10px 0; letter-spacing: 0.05em;">SUNCITY PALLETS LIQUIDATION STORE LLC</p>
      <h1 style="font-size: 26px; font-weight: 700; color: #111827; margin: 0; line-height: 1.2;">Order Status Updated</h1>
    </div>
    <div style="padding: 20px 40px 40px 40px;">
      <p style="margin: 0 0 20px 0; font-size: 16px; color: #374151;">Hi ${order.firstName || "Customer"},</p>
      <p style="margin: 0 0 20px 0; font-size: 15px; color: #4b5563; line-height: 1.6;">The status of your order <strong>#${order.orderId}</strong> has been updated.</p>

      <div style="background-color: #f9fafb; border-radius: 8px; padding: 20px; border: 1px solid #f3f4f6; margin-bottom: 25px; text-align: center;">
        <span style="font-size: 14px; color: #6b7280; display: block; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 5px;">New Status</span>
        <strong style="font-size: 22px; color: ${statusColor}; text-transform: uppercase; letter-spacing: 0.02em;">${newStatus}</strong>
      </div>

      <p style="margin: 0 0 25px 0; font-size: 15px; color: #4b5563; line-height: 1.6;">You can view the full details of your order and track its history in your account dashboard:</p>

      <div style="text-align: center; margin-bottom: 30px;">
        <a href="${process.env.SITE_URL || "http://localhost:3000"}/my-account/orders" target="_blank" style="display: inline-block; background-color: #a855f7; color: #ffffff; padding: 12px 28px; border-radius: 9999px; text-decoration: none; font-weight: 500; font-size: 15px; text-align: center; box-shadow: 0 2px 4px rgba(168, 85, 247, 0.2);">View Orders</a>
      </div>

      <h2 style="font-size: 18px; font-weight: 600; color: #111827; margin: 0 0 15px 0; border-bottom: 2px solid #f3f4f6; padding-bottom: 8px;">Order Details</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px; color: #4b5563;">
        <tr>
          <td style="padding: 8px 0; font-weight: 600;">Order ID:</td>
          <td style="padding: 8px 0; text-align: right; color: #111827;">#${order.orderId}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: 600;">Order Date:</td>
          <td style="padding: 8px 0; text-align: right; color: #111827;">${orderDate}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: 600;">Total Price:</td>
          <td style="padding: 8px 0; text-align: right; color: #111827; font-weight: bold;">$${(order.totalPrice / 100).toFixed(2)}</td>
        </tr>
      </table>

      <p style="margin: 40px 0 0 0; font-size: 14px; color: #6b7280; text-align: center; line-height: 1.5;">
        If you have any questions or require assistance, please contact us at <a href="mailto:info@suncitypalletsliquidation.com" style="color: #a855f7; text-decoration: none; font-weight: 500;">info@suncitypalletsliquidation.com</a>.
      </p>
    </div>
  `;
  return getEmailWrapper(content);
};
