import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
 title: "My App: Home",
 description: "My customized app!",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <body className={inter.className}>
    <nav className="bg-gray-800 text-white p-4 py-6 border-b border-gray-200 dark:border-gray-700">
     <ul className="flex gap-6 items-center justify-center">
      <li>
       <Link href="/">Home</Link>
      </li>
      <li>
       <Link href="/about">About</Link>
      </li>
      <li>
       <Link href="/posts">Posts</Link>
      </li>
      <li>
       <Link href="/blog">Blog</Link>
      </li>
     </ul>
    </nav>
    {children}
   </body>
  </html>
 );
}
