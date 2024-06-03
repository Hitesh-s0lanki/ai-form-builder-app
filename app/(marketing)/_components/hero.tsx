"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Hero = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-full lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Create your Form.
            <strong className="font-extrabold text-red-700 sm:block">
              In Seconds Not in Hours
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Effortlessly create your form in seconds, saving hours of work and
            streamlining your process with ease.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {!isSignedIn && (
              <SignInButton>
                <Button>Get Started</Button>
              </SignInButton>
            )}
            {isSignedIn && (
              <Button asChild>
                <Link href="/dashboard">Create Form with AI</Link>
              </Button>
            )}
            <Button variant="link">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
