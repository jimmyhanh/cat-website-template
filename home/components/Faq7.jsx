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
              How does detection work?
            </h2>
            <p>
              CyberApex Labs monitors your entire infrastructure in real-time,
              analyzing network traffic, system logs, and behavioral patterns.
              Our AI engine identifies anomalies and threats the moment they
              appear, before they can cause damage.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can we integrate with existing tools?
            </h2>
            <p>
              Yes. CyberApex Labs connects seamlessly with your current security
              stack. We support integrations with SIEM platforms, ticketing
              systems, and cloud providers out of the box.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What about false positives?
            </h2>
            <p>
              Our intelligent triage system learns your environment and
              dramatically reduces noise. Most teams see a 90% reduction in
              false alerts within the first month of deployment.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How fast is response automation?
            </h2>
            <p>
              Automated containment happens in seconds. Threats are isolated,
              suspicious accounts are locked, and your team is notified
              simultaneously. No waiting for manual intervention.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Is there a free trial available?
            </h2>
            <p>
              Absolutely. Start with our free tier to explore core features. No
              credit card required. Upgrade anytime as your needs grow.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Need more help?
          </h4>
          <p className="md:text-md">
            Our team is ready to answer any questions about implementation,
            pricing, or features
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact us" variant="secondary">
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
