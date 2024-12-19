import { SignedOut, SignInButton } from "@clerk/nextjs";
import { BiLogoGmail, BiLogoDiscordAlt } from "react-icons/bi";
const SignIn = () => {
  console.log("taal signin")
  return (
    <SignedOut>
      <div className="bg-violet-800 hover:bg-violet-600 rounded-md min-h-20 min-w-60 text-4xl font-serif flex items-center justify-between px-5 py-2">
        <SignInButton /> 
        <p> <BiLogoGmail /> <BiLogoDiscordAlt /></p>
      </div>
    </SignedOut>
  )
}

export default SignIn