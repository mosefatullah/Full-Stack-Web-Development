export default async function getPostComments({
    id,
   }: {
    id: number;
   }): Promise<Response> {
    const response: Response = await fetch(
     `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    if (!response.ok) {
     throw new Error(response.statusText);
    }
    return response.json();
   }
   