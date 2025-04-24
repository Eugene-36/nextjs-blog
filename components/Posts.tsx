"use client";
import useSWR from "swr";
// import { useEffect } from "react";
// import { useShallow } from "zustand/react/shallow";
import Link from "next/link";
import { usePosts } from "../store";
import { getAllPosts } from "../services/api";
const Posts = () => {
  const { data: posts, isLoading } = useSWR("posts", getAllPosts);
  // const [posts, loading, getAllPosts] = usePosts(
  //   useShallow((state) => [state.posts, state.loading, state.getAllPosts])
  // );
  // useEffect(() => {
  //   getAllPosts();
  // }, [getAllPosts]);
  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <div>
      <ul>
        {posts.map((post: { id: number; title: string }) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Posts };
