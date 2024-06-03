"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const router = useRouter();
  return (
    <nav className=" p-5 px-10 border-b shadow-sm flex justify-between items-center">
      <h1 className=" text-xl font-bold">Form Builder</h1>
      <div className=" flex gap-x-2">
        {isSignedIn && (
          <Button onClick={() => router.push("/dashboard")} variant="link">
            Dashboard
          </Button>
        )}
        {isSignedIn && <UserButton />}
        {!isSignedIn && (
          <SignInButton>
            <Button>Get Started</Button>
          </SignInButton>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
