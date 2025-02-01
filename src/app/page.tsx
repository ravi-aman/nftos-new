"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FC, useEffect, useRef } from "react";
import { gsap } from "gsap";


<link
  href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap"
  rel="stylesheet"
/>
const Page: FC = () => {
  // Create refs for each element we want to animate
  const heroRef = useRef<HTMLHeadingElement>(null);
  const mailingListRef = useRef<HTMLDivElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate the Hero Heading
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power1.out" }
      );
    }

    // Animate the Mailing List Container
    if (mailingListRef.current) {
      gsap.fromTo(
        mailingListRef.current,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1, ease: "power1.out" }
      );
    }

    // Animate the Heading in the Mailing List Section
    if (h2Ref.current) {
      gsap.fromTo(
        h2Ref.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power1.out" }
      );
    }

    // Animate the Paragraph in the Mailing List Section
    if (pRef.current) {
      gsap.fromTo(
        pRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: "power1.out" }
      );
    }

    // Animate the Input and Button container
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 0.7, ease: "power1.out" }
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center max-w-4xl mx-auto">
        <h1
          ref={heroRef}
          className="text-4xl md:text-6xl font-light text-gray-800 mb-16"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Innovative Web3 solutions for a decentralized future.
        </h1>

        {/* Mailing List Section */}
        <div
          ref={mailingListRef}
          className="w-full max-w-2xl border-2 rounded-3xl p-8"
        >
          <h2
            ref={h2Ref}
            className="text-xl font-medium mb-2"
          >
            JOIN OUR MAILING LIST
          </h2>
          <p
            ref={pRef}
            className="text-2xl text-gray-800 mb-8"
          >
            Get the latest update from the Trillicorn.
          </p>
          <div
            ref={formRef}
            className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto"
          >
            <Input
              type="email"
              placeholder="Email Address"
              className="flex-1 rounded-full border-gray-300"
            />
            <Button className="rounded-full bg-black text-white hover:bg-gray-800 px-8">
              Submit
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
