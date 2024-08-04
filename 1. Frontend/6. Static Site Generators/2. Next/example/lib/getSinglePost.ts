export default async function getSinglePost({
 id,
}: {
 id: number;
}): Promise<Response> {
 const response: Response = await fetch(
  `https://jsonplaceholder.typicode.com/posts/${id}`
 );
 if (!response.ok) {
  throw new Error(response.statusText);
 }
 return response.json();
}
