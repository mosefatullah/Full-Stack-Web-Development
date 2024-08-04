import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

export default function BlogPage({ params }: any) {
  const { id } = params;

  if (!['1', '2', '3'].includes(id)) {
    notFound();
  }

  return (
    <main className="p-10">
      <div className="flex justify-between">
        <h1>Post #{id}</h1>
        <Link href="/blog" className="mb-4 text-blue-500 hover:underline">
          Back to all posts
        </Link>
      </div>
    </main>
  );
}
