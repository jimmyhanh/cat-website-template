"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing19() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Plans</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Simple pricing
          </h1>
          <p className="md:text-md">Choose the plan that fits your needs</p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
            <div>
              <div className="rb-4 mb-4 flex flex-col items-end justify-end">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume icon 1"
                  className="size-12"
                />
              </div>
              <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                $19
              </h3>
              <p>or $190 yearly</p>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <p>Includes:</p>
              <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Up to 5 projects</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Basic analytics</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Email support</p>
                </div>
              </div>
            </div>
            <div>
              <Button title="Get started" className="w-full">
                Get started
              </Button>
            </div>
          </div>
          <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
            <div>
              <div className="rb-4 mb-4 flex flex-col items-end justify-end">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume icon 1"
                  className="size-12"
                />
              </div>
              <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                $49
              </h3>
              <p>or $490 yearly</p>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <p>Includes:</p>
              <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Unlimited projects</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Advanced analytics</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Priority support</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>API access</p>
                </div>
              </div>
            </div>
            <div>
              <Button title="Get started" className="w-full">
                Get started
              </Button>
            </div>
          </div>
          <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
            <div>
              <div className="rb-4 mb-4 flex flex-col items-end justify-end">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume icon 1"
                  className="size-12"
                />
              </div>
              <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                $99
              </h3>
              <p>or $990 yearly</p>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <p>Includes:</p>
              <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Everything in Pro</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Custom integrations</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Dedicated account manager</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>SLA guarantee</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>24/7 phone support</p>
                </div>
              </div>
            </div>
            <div>
              <Button title="Get started" className="w-full">
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
