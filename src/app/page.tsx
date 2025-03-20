import { Button } from "@/components/ui/button"
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div className="m-4">
      <SignedOut>
        <SignInButton mode='modal'>
          <Button  className="cursor-pointer">Sign in</Button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
      <Button variant={"secondary"} className="cursor-pointer">Sign in</Button>
    </div>
  );
}
