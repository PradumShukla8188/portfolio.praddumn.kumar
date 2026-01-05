import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Praddumn Kumar - Full Stack Developer",
  description: "Interactive Resume - MERN Stack Developer with expertise in Next.js, React, Angular, Node.js, and modern web technologies",
  keywords: ["Full Stack Developer", "MERN Stack", "Next.js", "React", "Angular", "Node.js", "NestJS"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
