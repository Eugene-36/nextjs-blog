"use client";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import type { FormEventHandler } from "react";
import s from "../styles/global.module.css";

const SignInForm = () => {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    console.log("res", res);
    if (res && !res.error) {
      router.push("/profile");
    } else {
      console.error("Sign in failed", res?.error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className={s.title}>Sign In</h1>
      <form className={s.formElement} onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={s.inputField}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={s.inputField}
          required
        />
        <button type="submit" className={s.btn}>
          Sign In
        </button>
      </form>
    </div>
  );
};
export { SignInForm };
