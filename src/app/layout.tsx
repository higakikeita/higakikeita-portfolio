import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keita Higaki - Cloud Security & DevOps Engineer",
  description: "Portfolio of Keita Higaki - Sysdig CSE, Cloud Security, DevSecOps, Kubernetes, Terraform, OSS Contributor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
