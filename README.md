This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


```bash
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="file:./dev.db"
ADMIN_USERNAME=admin
# pass1234
HASHED_ADMIN_PASSWORD=tm3Vp6aJ+I4wKrKuSpVn+cdXLBjlILO/cSuyYws5MaUD1ke67fSN9HAAYxLQeYQhZXi2BSbl7mE37x/SFRkKDA==

# Stripe config
STRIPE_SECRET_KEY=sk_test_51QHKsrLi7nb85iY2kEBBvFMopTYze2wFqRbzH3gqQZd8F4IJkkGGzUIqSM3wILqnXxZp9avPMwG2C1GJsWc4vdPp00bP4apLbB
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_51QHKsrLi7nb85iY2i2eTaqF7UV3MjBzxq6zyHSMD4W03xROTCBEN1hjQSRiUz8dkhEUXPKtOYrPYMZzmFbrr8fTD00eSE26Vg1
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
STRIPE_WEBHOOK_SECRET=whsec_a08d07a877be8e90f87ed04067dc0d60994ca9a8e230824207fdd0a4d3ce2911


# Resend - Email send
RESEND_API_KEY=re_e7UgyaHt_MntkU4HQSDc91xTasjkwDmVh
# RESEND_API_KEY=re_UKkvmViW_AiVrqcsfmzY5BWCMyhjEmEs1
SENDER_EMAIL=onboarding@resend.dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
