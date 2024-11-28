import { Button } from "@repo/design-system/components/ui/button";
import { env } from "@repo/env";
import { allPosts } from "content-collections";
import { MoveRight, PhoneCall } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Hero = () => (
  <div className="relative h-screen w-full">
    {/* Full-Width Background Image */}
    <Image
      src="/landing-page/Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg"
      alt="Echo Park Lake with Downtown Los Angeles Skyline"
      layout="fill" // Ensures the image spans the entire container
      objectFit="cover" // Ensures the image covers the container
      priority // Ensures the image loads quickly
    />

    {/* Overlay Content */}
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 px-4 text-center text-white">
      <h1 className="max-w-3xl font-bold text-5xl leading-tight md:text-7xl">
        Turn Your Actions Into Impact
      </h1>
      <p className="mt-4 max-w-2xl text-lg md:text-xl">
        Join challenges, log eco-friendly actions, and compete for rewards while
        making Los Angeles a better place.
      </p>
      <div className="mt-8 flex flex-row gap-4">
        <Button size="lg" className="gap-4" asChild>
          <Link href={env.NEXT_PUBLIC_APP_URL}>
            Sign up <MoveRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  </div>
);
