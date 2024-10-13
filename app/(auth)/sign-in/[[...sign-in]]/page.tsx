import { SignIn } from "@clerk/nextjs";

export default function Page() {
  console.log("Sign In Page Called");
  return <SignIn />
}