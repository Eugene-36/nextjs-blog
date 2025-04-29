import { GoogleButton } from "@/components/GoogleBtn";
import { SignInForm } from "@/components/SignInForm";

export default function SignIn() {
  return (
    <div>
      <h1>Sign IN</h1>
      <GoogleButton />
      <div>or</div>
      <SignInForm />
    </div>
  );
}
