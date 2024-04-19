import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Event planner",
  description: "Some fun stuff in React & Next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav className="flex gap-4 font-mono">
        <Link href="/">Home</Link>
        <Link href="/add-event">Add event</Link>
      </nav>
        {children}
        </body>
    </html>
  );
}
