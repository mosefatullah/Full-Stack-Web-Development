export default async function getAllPosts(): Promise<Response> {
 const response: Response = await fetch(
  "https://jsonplaceholder.typicode.com/posts?_limit=10",
  {
    next: {
        revalidate: 10,
    }
  }
 );
 if (!response.ok) {
  throw new Error(response.statusText);
 }
 return response.json();
}
