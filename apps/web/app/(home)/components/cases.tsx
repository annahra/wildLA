"use client";

import Image from "next/image";
import { Leaf, Bike, Globe } from "lucide-react"; // Example icons from lucide-react

export const WhatWeDo = () => {
  return (
    <section className="w-full bg-gradient-to-b from-green-50 to-white py-20 lg:py-40">
      <div className="container mx-auto flex flex-col items-center gap-8 lg:flex-row">
        {/* Left Side: Image */}
        <div className="h-full w-full lg:w-1/2">
          <Image
            src="/landing-page/Solstace_Canyon.jpeg"
            alt="Solstice Canyon"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Content */}
        <div className="flex w-full flex-col gap-6 text-center lg:w-1/2 lg:text-left">
          <h2 className="font-bold text-4xl text-gray-800 md:text-5xl">
            Empowering LA Residents to Make a Greener Impact
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Wild LA is a gamified platform that inspires eco-conscious actions.
            Log your sustainable activities, reduce your carbon footprint, and
            compete for rewards!
          </p>

          {/* Features */}
          <div className="flex flex-col gap-4">
            {/* Feature 1 */}
            <div className="flex items-center gap-4">
              <Leaf className="h-8 w-8 text-green-500" />
              <div>
                <h3 className="font-semibold text-gray-800 text-xl">
                  Reduce Waste
                </h3>
                <p className="text-gray-600">
                  Learn how to minimize your waste impact and embrace
                  sustainability.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4">
              <Bike className="h-8 w-8 text-blue-500" />
              <div>
                <h3 className="font-semibold text-gray-800 text-xl">
                  Bike Instead of Drive
                </h3>
                <p className="text-gray-600">
                  Track your biking miles and see how much CO₂ you’ve saved.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-4">
              <Globe className="h-8 w-8 text-yellow-500" />
              <div>
                <h3 className="font-semibold text-gray-800 text-xl">
                  Support Biodiversity
                </h3>
                <p className="text-gray-600">
                  Participate in community actions like planting native gardens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
