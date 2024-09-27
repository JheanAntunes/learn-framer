import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/docs/example-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn Framer Motion",
  description: "Conhecendo a biblioteca framer motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header className="h-20 w-full px-5 flex items-center justify-end">
          <Menu />
        </header>
        {children}
      </body>
    </html>
  );
}
