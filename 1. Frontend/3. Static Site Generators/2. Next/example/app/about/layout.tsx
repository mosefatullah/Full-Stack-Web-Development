import Link from "next/link";

export const metadata = {
   title: "About Us",
   description: "About our app!",
};

export default function AboutLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
    <div>
    <nav className="bg-gray-900 text-white px-10 py-3 text-sm text-blue-500">
     <ul className="flex gap-3">
      <li>
       <Link href="/about/mission">Mission</Link>
      </li>
      <li>
       <Link href="/about/vision">Vision</Link>
      </li>
     </ul>
    </nav>
    {children}
    </div>
 );
}
