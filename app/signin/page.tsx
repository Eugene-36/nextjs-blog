import { GoogleButton } from "@/components/GoogleBtn";
import { SignInForm } from "@/components/SignInForm";
import s from "@/styles/global.module.css";

export default function SignIn() {
  return (
    <div className={s.signInContainer}>
      <h1 className={s.title}>Sign in</h1>
      <GoogleButton />
      <div>or</div>
      <SignInForm />
    </div>
  );
}
