import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "The Event planner",
  description: "Some fun stuff in React & Next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
      <nav className="flex gap-5 font-mono">
        <Link href="/">Home</Link>
        <Link href="/add-event">Add event</Link>
        <Link href="/event">More stuff</Link>
      </nav>
        
        {children}</body>
    </html>
  );
}
