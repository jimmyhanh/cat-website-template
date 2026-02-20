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
            Common questions about security, implementation, and getting started
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How long does setup take?
            </h2>
            <p>
              Most teams are operational within hours, not days. The integration
              is straightforward, and our setup guides walk you through each
              step. No complex configurations needed.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can we integrate with existing tools?
            </h2>
            <p>
              Yes. We support API connections with most major platforms. If you
              use a specific tool, we likely have documentation for it. Contact
              our team for custom integrations.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What about data security?
            </h2>
            <p>
              Security is built in, not bolted on. We use industry-standard
              encryption, regular audits, and compliance certifications. Your
              data stays yours, always.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Is there a free trial available?
            </h2>
            <p>
              Yes. Start with our free tier to explore the core features.
              Upgrade when you're ready. No credit card required to begin.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How do you handle support?
            </h2>
            <p>
              Our team responds within hours, not days. Email, chat, and
              documentation are all available. Enterprise customers get
              dedicated support.
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
