import getAllPosts from '@/lib/getAllPosts';
import Image from 'next/image';
import Link from 'next/link';

export default async function Posts() {
  const posts:any = await getAllPosts();
  return (
    <div className='p-10'>
      <h1>All Posts</h1>
      <ul className='grid gap-4 mt-4 lg:grid-cols-2 mt-6'>
        {posts.map((post:any) => (
          <Link href={`/posts/${post.id}`} key={post.id} className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Image src="https://flowbite.com/docs/images/blog/image-4.jpg" className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-50 md:rounded-none md:rounded-s-lg object-cover" alt="Thumbnail" width={100} height={80} />
            <div className="flex flex-col gap-5 pt-7 p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">{post.title}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 first-letter:capitalize">
                {post.body}
              </p>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  )
}