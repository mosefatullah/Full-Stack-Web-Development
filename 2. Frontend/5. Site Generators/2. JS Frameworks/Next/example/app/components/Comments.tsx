export default async function Comments({promise}:any) {
  const comments = await promise;
  return (
    <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">Comments</h5>
                <ul className="mt-4 list-disc pl-5">
                    {comments.map((comment: {
                        name: string;
                        body: string;
                    }, index: number) => (
                        <li key={index} className="mt-2">
                            <h6 className="font-bold text-gray-900 dark:text-white">{comment.name}</h6>
                            <p className="text-gray-700 dark:text-gray-400">{comment.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
  )
}
