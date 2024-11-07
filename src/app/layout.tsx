import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-background min-h-screen font-sans antialiased text-gray-900 selection:bg-primary selection:text-white">
        <main className="flex justify-center min-h-screen">
          {/* Center the children inside the main container */}
          <div className="max-w-screen-lg w-full p-4 font-mono">{children}</div>
        </main>
      </body>
    </html>
  );
}
