import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const info = {
  name: "music-ui",
  twitter: "@AmitRana_",
  github: "amit5885",
  description: "User Interface built in Nextjs.",
  url: "https://music-ui.amitrana.dev",
};

export const metadata: Metadata = {
  metadataBase: new URL(info.url),
  title: { default: info.name, template: `%s | ${info.name}` },
  description: info.description,
  openGraph: {
    type: "website",
    url: info.url,
    title: info.name,
    description: info.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: info.url,
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative flex items-center justify-center w-full">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
