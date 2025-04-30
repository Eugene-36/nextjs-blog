"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import s from "../styles/global.module.css";

const GoogleButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";
  return (
    <button className={s.btn} onClick={() => signIn("google", { callbackUrl })}>
      Sign in with Google
    </button>
  );
};

export { GoogleButton };
