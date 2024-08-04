import getPostComments from "@/lib/getPostComments";
import getSinglePost from "@/lib/getSinglePost"
import Link from "next/link";
import { Suspense } from "react";
import Comments from "@/app/components/Comments";
import getAllPosts from "@/lib/getAllPosts";

export async function generateMetadata(
    { params }: { params: { id: number } }
): Promise<{ title: string; description: string }> {
    const id = params.id;
    let data: any = await getSinglePost({ id: params.id });

    return {
        title: data.title
            .split(" ")
            .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
        description: data.body,
    }

}

export default async function Post({ params }: { params: { id: number } }) {
    const data: any = await getSinglePost({ id: params.id });
    const commentsPromise: Promise<Response> = getPostComments({ id: params.id });

    return (
        <div className="m-8 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="/posts" className="mb-4 text-blue-500 hover:underline">Back to all posts</Link>
            <h5 className="mb-2 mt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">{
                data?.title || ""
            }</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 first-letter:uppercase">{data?.body || ""}</p>
            <div className="mt-5">
                <Suspense fallback="Loading comments...">
                    <Comments promise={commentsPromise} />
                </Suspense></div>
        </div>
    )
}

export async function generateStaticParams() {
    const posts: any = await getAllPosts();
    return posts.map((post:any) => ({
        id: post.id.toString(),
    }))
}