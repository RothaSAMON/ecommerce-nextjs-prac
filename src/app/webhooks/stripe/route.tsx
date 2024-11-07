// import db from "@/db/db";
// import { NextRequest, NextResponse } from "next/server";
// import { Resend } from "resend";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
// const resend = new Resend(process.env.RESEND_API_KEY as string);

// export async function POST(req: NextRequest) {
//   const event = await stripe.webhooks.constructEvent(
//     await req.text(),
//     req.headers.get("stripe-signature") as string,
//     process.env.STRIPE_WEBHOOK_SECRET as string
//   );

//   // This is the all the info that we need for Order of customer
//   if (event.type === "charge.succeeded") {
//     const charge = event.data.object;
//     const productId = charge.metadata.productId;
//     const email = charge.billing_details.email;
//     const pricePaidInCents = charge.amount;

//     const product = await db.product.findUnique({ where: { id: productId } });
//     if (product == null || email == null) {
//       console.error("Invalid product or email💥");
//       return new NextResponse("Bad Request", { status: 500 });
//     }

//     const userFields = {
//       email,
//       orders: { create: { productId, pricePaidInCents } },
//     };
//     const {
//       orders: [order],
//     } = await db.user.upsert({
//       where: { email },
//       create: userFields,
//       update: userFields,
//       select: { orders: { orderBy: { createdAt: "desc" }, take: 1 } },
//     });

//     const downloadVerification = await db.downloadVerification.create({
//       data: {
//         productId,
//         expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
//       },
//     });

//     // await resend.emails.send({
//     //   from: `Support <${process.env.SENDER_EMAIL}>`,
//     //   to: email,
//     //   subject: "Order Confirmation",
//     //   react: <h1>Hi</h1>,
//     // });
//     await resend.emails.send({
//       from: `Support <${process.env.SENDER_EMAIL}>`,
//       to: email,
//       subject: "Order Confirmation",
//       html: "<h1>Hi, your order is confirmed!</h1>",
//     });

//     return new NextResponse();
//   }
// }

import db from "@/db/db";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";
import PurchaseReceiptEmail from "@/email/PurchaseReceipt";
// import PurchaseReceiptEmail from "@/email/PurchaseReceipt";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
const resend = new Resend(process.env.RESEND_API_KEY as string);

export async function POST(req: NextRequest) {
  console.log("hajhajhaj");
  const event = await stripe.webhooks.constructEvent(
    await req.text(),
    req.headers.get("stripe-signature") as string,
    process.env.STRIPE_WEBHOOK_SECRET as string
  );
  console.log("is it run???");

  if (event.type === "charge.succeeded") {
    const charge = event.data.object;

    console.log("Charge🫣", charge);
    const productId = charge.metadata.productId;
    const email = charge.billing_details.email;
    const pricePaidInCents = charge.amount;

    const product = await db.product.findUnique({ where: { id: productId } });
    if (product == null || email == null) {
      return new NextResponse("Bad Request", { status: 400 });
    }

    const userFields = {
      email,
      orders: { create: { productId, pricePaidInCents } },
    };
    const {
      orders: [order],
    } = await db.user.upsert({
      where: { email },
      create: userFields,
      update: userFields,
      select: { orders: { orderBy: { createdAt: "desc" }, take: 1 } },
    });

    const downloadVerification = await db.downloadVerification.create({
      data: {
        productId,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
      },
    });

    await resend.emails.send({
      from: `Support <${process.env.SENDER_EMAIL}>`,
      to: email,
      subject: "Order Confirmation",
      react: (
        <PurchaseReceiptEmail
          order={order}
          product={product}
          downloadVerificationId={downloadVerification.id}
        />
      ),
    });
  }

  return new NextResponse();
}
