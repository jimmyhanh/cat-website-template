"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing22() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Compare</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Plan features
          </h1>
          <p className="md:text-md">See exactly what's included in each tier</p>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-3 gap-x-4 bg-white md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-x-8">
            <div className="hidden md:block" />
            <div className="flex h-full flex-col justify-between text-center">
              <div>
                <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                  Starter
                </h2>
                <p className="my-3 text-2xl font-bold leading-[1.2] sm:text-6xl md:my-4 md:text-9xl lg:text-10xl">
                  $19
                </p>
                <p>per month, billed monthly</p>
              </div>
              <div className="mt-6 md:mt-8">
                <Button
                  title="Get started"
                  className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                >
                  Get started
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between text-center">
              <div>
                <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                  Professional
                </h2>
                <p className="my-3 text-2xl font-bold leading-[1.2] sm:text-6xl md:my-4 md:text-9xl lg:text-10xl">
                  $49
                </p>
                <p>per month, billed monthly</p>
              </div>
              <div className="mt-6 md:mt-8">
                <Button
                  title="Get started"
                  className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                >
                  Get started
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between text-center">
              <div>
                <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                  Enterprise
                </h2>
                <p className="my-3 text-2xl font-bold leading-[1.2] sm:text-6xl md:my-4 md:text-9xl lg:text-10xl">
                  $99
                </p>
                <p>per month, billed monthly</p>
              </div>
              <div className="mt-6 md:mt-8">
                <Button
                  title="Get started"
                  className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                >
                  Get started
                </Button>
              </div>
            </div>
          </div>
          <h3 className="mt-8 py-5 text-md font-bold leading-[1.4] md:text-xl">
            Core features
          </h3>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Projects allowed
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              5
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              Unlimited
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              Unlimited
            </p>
          </div>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Storage capacity
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
          </div>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Analytics dashboard
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
          </div>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Basic version
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
          </div>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Advanced version
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
          </div>
          <h3 className="mt-8 py-5 text-md font-bold leading-[1.4] md:text-xl">
            Advanced version
          </h3>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Support and access
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              Email support
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              Included
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              Included
            </p>
          </div>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Included
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
          </div>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Priority support
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
          </div>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Not included
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
          </div>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Included
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
          </div>
          <h3 className="mt-8 py-5 text-md font-bold leading-[1.4] md:text-xl">
            Included
          </h3>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Developer tools
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              API access
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              Not included
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              Included
            </p>
          </div>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Included
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
          </div>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Custom integrations
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
          </div>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Not included
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
          </div>
          <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
              Not included
            </p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></p>
            <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </p>
          </div>
          <div className="rt-8 mt-8 grid grid-cols-3 gap-x-4 bg-white md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-x-8">
            <div className="hidden md:block" />
            <Button
              title="Get started"
              className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
            >
              Get started
            </Button>
            <Button
              title="Get started"
              className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
            >
              Get started
            </Button>
            <Button
              title="Get started"
              className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
