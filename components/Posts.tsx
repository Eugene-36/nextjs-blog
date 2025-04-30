"use client";
import useSWR from "swr";
// import { useEffect } from "react";
// import { useShallow } from "zustand/react/shallow";
import Link from "next/link";
import { usePosts } from "../store";
import { getAllPosts } from "../services/api";
import s from "../styles/global.module.css";
const Posts = () => {
  const { data: posts, isLoading } = useSWR("posts", getAllPosts);
  // const [posts, loading, getAllPosts] = usePosts(
  //   useShallow((state) => [state.posts, state.loading, state.getAllPosts])
  // );
  // useEffect(() => {
  //   getAllPosts();
  // }, [getAllPosts]);
  return isLoading ? (
    <h3 style={{ textAlign: "center" }}>Loading...</h3>
  ) : (
    <div className={s.postList}>
      <ul>
        {posts.map((post: { id: number; title: string }) => (
          <li key={post.id}>
            <a href={`/blog/${post.id}`} className={s.postLink}>
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Posts };
