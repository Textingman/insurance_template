import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auto Insurance Template — Car Selection, Insurance & Maintenance Consultancy",
  description: "Expert consultancy helping you choose the right car, find the best auto insurance, and keep your vehicle running at its best.",
  keywords: "auto insurance, car selection, vehicle maintenance, car buying advice, insurance comparison, auto consultancy",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Auto Insurance Template — Car Selection, Insurance & Maintenance Consultancy",
    description: "Expert guidance on selecting the right car, comparing auto insurance options, and maintaining your vehicle.",
    siteName: "Auto Insurance Template",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
