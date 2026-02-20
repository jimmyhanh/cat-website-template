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
            Everything you need to know about our pricing and plans
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can I change plans anytime?
            </h2>
            <p>
              Yes. Switch between plans at any time during your billing cycle.
              Changes take effect immediately on your next renewal date. No
              penalties or hidden fees.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What payment methods do you accept?
            </h2>
            <p>
              We accept all major credit cards, bank transfers, and digital
              wallets. Enterprise customers can arrange custom payment terms
              directly with our sales team.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Is there a free trial available?
            </h2>
            <p>
              All plans come with a 14-day free trial. No credit card required
              to start. Full access to features during the trial period.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you offer annual discounts?
            </h2>
            <p>
              Yes. Annual billing saves you 15% compared to monthly rates. Pay
              once per year and lock in your price for the full 12 months.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What about refunds?
            </h2>
            <p>
              We offer a 30-day money-back guarantee if you're not satisfied.
              Contact our support team to process your refund with no questions
              asked.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Need more help?
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
