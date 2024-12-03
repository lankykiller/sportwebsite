import { SignedOut, SignInButton } from "@clerk/nextjs";

const SignIn = () => {
  return (
    <SignedOut>
    <SignInButton />
  </SignedOut>
  )
}

export default SignIn