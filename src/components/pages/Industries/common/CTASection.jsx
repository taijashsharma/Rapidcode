import React from "react";
import { ctaData } from "@/data/ctaData";

const CTASection = () => {
  const { heading, link, marqueeText, repeatCount } = ctaData;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8 mb-8">
        <h2 className="text-2xl font-light text-foreground">
          {heading}
        </h2>
      </div>

      <a
        href={link}
        className="block bg-hero-bg py-6 overflow-hidden cursor-pointer hover:bg-hero-overlay transition-colors"
      >
        <div className="marquee-container">
          <div className="marquee-content text-primary-foreground text-lg font-medium">
            {[...Array(repeatCount)].map((_, i) => (
              <span key={i} className="whitespace-nowrap">
                {marqueeText}
              </span>
            ))}
          </div>
        </div>
      </a>
    </section>
  );
};

export default CTASection;
