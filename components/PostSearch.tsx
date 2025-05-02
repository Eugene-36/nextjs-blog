"use client";
import useSWR from "swr";

import { useState, FormEventHandler } from "react";
import { getPostsBySearch } from "../services/api";

import s from "../styles/global.module.css";
// import { usePosts } from "../store";

const PostSearch = () => {
  const { mutate } = useSWR("posts");
  const [search, setSearch] = useState<string>("");
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const posts = await getPostsBySearch(search);
    mutate(posts);
  };
  return (
    <form onSubmit={handleSubmit} className={s.formElement}>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className={s.inputField}
      />
      <button type="submit" className={s.btn}>
        Search
      </button>
    </form>
  );
};

export { PostSearch };
