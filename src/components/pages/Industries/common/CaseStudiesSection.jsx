import React from "react";
import { ArrowRight } from "lucide-react";

const CaseStudiesSection = ({ studies }) => {
  return (
    <section className="py-20 bg-hero-bg">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {studies.map((study) => (
            <div key={study.id} className="group cursor-pointer">
              <div className="mb-4">
                <span className="text-primary text-sm font-medium">
                  {study.category}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-primary-foreground mb-4 group-hover:text-primary transition-colors">
                {study.title}
              </h3>

              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
                {study.description}
              </p>

              <a
                href={study.link}
                className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all text-sm font-medium"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
