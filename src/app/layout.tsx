import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akash Sachan",
  description: "Hi! I am Akash Sachan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} bg-slate-950`}>{children}</body>
    </html>
  );
}
