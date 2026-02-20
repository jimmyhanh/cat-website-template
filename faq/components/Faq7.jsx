"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Questions
          </h2>
          <p className="md:text-md">
            Everything you need to know about CyberApex Labs and how it works
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How does CyberApex Labs integrate?
            </h2>
            <p>
              CyberApex Labs connects seamlessly with your existing tools and
              workflows. We support API integrations, webhook configurations,
              and direct connections to over fifty popular platforms. Setup
              takes minutes, not weeks.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What security measures are in place?
            </h2>
            <p>
              We employ end-to-end encryption, SOC 2 Type II compliance, and
              regular security audits. Your data lives in isolated environments
              with multi-factor authentication as standard. Security isn't an
              afterthought—it's the foundation.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can I scale with CyberApex Labs?
            </h2>
            <p>
              Yes. Our infrastructure grows with you, from startups to
              enterprise deployments. You'll never hit a ceiling. We handle
              millions of operations daily without breaking a sweat.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What kind of support do you offer?
            </h2>
            <p>
              We provide 24/7 support through email, chat, and phone for
              enterprise clients. Standard plans get priority email support with
              guaranteed response times. Our team knows the product inside and
              out.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How does pricing work exactly?
            </h2>
            <p>
              Pricing scales with your usage. Start free, upgrade when you need
              more. No hidden fees, no surprise charges. You only pay for what
              you use, and you can cancel anytime.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">Reach out to our team directly</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
