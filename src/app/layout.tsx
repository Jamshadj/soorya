import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soorya Narayana | Video Editor & Content Creator Portfolio",
  description:
    "Creative and detail-oriented Video Editor & Videographer specializing in photography, motion graphics, and visual storytelling. Explore my work in editing, content creation, and brand storytelling.",
  keywords: [
    "Video Editor",
    "Videographer",
    "Content Creator",
    "Motion Graphics",
    "Portfolio",
    "Visual Storytelling",
    "Photography",
    "Brand Communication",
    "Soorya Narayana",
  ],
  authors: [{ name: "Soorya Narayana K" }],
  openGraph: {
    title: "Soorya Narayana | Video Editor & Content Creator",
    description:
      "Explore the creative works of Soorya Narayana — a passionate video editor, videographer, and storyteller with expertise in motion graphics and visual communication.",
    url: "https://your-portfolio-domain.com", // 👉 replace with your domain
    siteName: "Soorya Narayana Portfolio",
    images: [
      {
        url: "/og-image.png", // 👉 put a social preview image in /public
        width: 1200,
        height: 630,
        alt: "Soorya Narayana Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soorya Narayana | Video Editor & Content Creator",
    description:
      "Creative video editor and storyteller — explore my portfolio of motion graphics, photography, and brand communication.",
    images: ["/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
