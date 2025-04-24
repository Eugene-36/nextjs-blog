import { Metadata } from "next";
import Link from "next/link";
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export const metadata: Metadata = {
  title: "Blog Next App",
};

export default async function Blog() {
  const posts = await getData();
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post: { id: number; title: string }) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
