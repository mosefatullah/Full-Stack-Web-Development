import Link from "next/link";

export default function Blog() {
    const blogs: Array<{ id: number; title: string; description: string }> = [
        {
            id: 1,
            title: "Blog 1",
            description: "Blog 1 description",
        },
        {
            id: 2,
            title: "Blog 2",
            description: "Blog 2 description",
        },
        {
            id: 3,
            title: "Blog 3",
            description: "Blog 3 description",
        },
    ];
    return (
        <main className="p-10">
            <h1>Blog</h1>
            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {blogs.map((blog, index) => (
                    <Link key={index} href={`/blog/${blog.id}`}>
                        <div key={blog.id} className="p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <h2 className="text-lg font-semibold">{blog.title}</h2>
                            <p className="text-sm">{blog.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
