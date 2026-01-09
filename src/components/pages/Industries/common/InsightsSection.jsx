import React from "react";
import { insightsSectionData } from "./insightsData";

const InsightsSection = () => {
  const { heading, insights } = insightsSectionData;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-2xl font-light text-foreground mb-12">
          {heading}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, index) => (
            <a
              key={index}
              href={insight.link}
              className="group block"
            >
              <div className="overflow-hidden mb-4">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <span className="text-primary text-sm font-medium">
                {insight.category}
              </span>

              <h3 className="text-lg font-medium text-foreground mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {insight.title}
              </h3>

              <p className="text-sm text-muted-foreground">
                {insight.meta}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
