import { Metadata } from "next";

async function getData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

type Props = {
  params: {
    id: string;
  };
};
export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const singlePost = await getData(id);
  return {
    title: `Post ${singlePost.title}`,
  };
}
export default async function Post({ params: { id } }: Props) {
  const singlePost = await getData(id);
  return (
    <div>
      <h1>Post {id}</h1>
      <h3>{singlePost.title}</h3>
      <p>{singlePost.body}</p>
    </div>
  );
}
