import React from "react";
import { complianceContent } from "./complianceData";

const ComplianceSection = () => {
  const { title, paragraphs } = complianceContent;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            {title}
          </h3>

          {paragraphs.map((text, index) => (
            <p
              key={index}
              className={`text-muted-foreground leading-relaxed ${
                index !== paragraphs.length - 1 ? "mb-6" : ""
              }`}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
