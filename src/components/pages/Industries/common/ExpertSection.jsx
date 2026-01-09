import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { expertSectionData } from "./expertData";

const ExpertSection = () => {
  const [showMore, setShowMore] = useState(false);
  const { tag, heading, introText, qas, expert } = expertSectionData;

  return (
    <section className="py-20 bg-hero-bg">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            {tag}
          </span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-light text-primary-foreground mb-12">
          {heading}
        </h2>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Q&A Column */}
          <div className="lg:col-span-2">
            <p className="text-primary-foreground/80 mb-8">
              {introText}
            </p>

            <div className="space-y-8">
              {qas.map((qa, index) => (
                <div
                  key={index}
                  className={!showMore && index > 0 ? "hidden" : ""}
                >
                  <div className="flex gap-4 mb-4">
                    <span className="text-primary font-bold text-xl">Q</span>
                    <p className="text-primary-foreground font-medium">
                      {qa.question}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-primary font-bold text-xl">A</span>
                    <p className="text-primary-foreground/70 leading-relaxed">
                      {qa.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-8 text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2 transition-colors"
            >
              {showMore ? (
                <>
                  See less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  See more <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </div>

          {/* Expert Card */}
          <div className="lg:col-span-1">
            <div className="bg-hero-overlay p-6">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-full aspect-square object-cover mb-6"
              />
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                {expert.name}
              </h3>
              <p className="text-primary-foreground/70 text-sm mb-1">
                {expert.designation}
              </p>
              <p className="text-primary-foreground/70 text-sm mb-1">
                {expert.domain}
              </p>
              <p className="text-primary-foreground/70 text-sm">
                {expert.company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
