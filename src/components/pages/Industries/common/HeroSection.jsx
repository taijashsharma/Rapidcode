import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const HeroSection = ({
  industryLabel,
  title,
  subtitle,
  backgroundImage,
  accordionItems,
  defaultAccordionId,
}) => {
  const [activeItem, setActiveItem] = useState(defaultAccordionId);

  return (
    <section className="relative min-h-screen pt-24 lg:pt-32">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={industryLabel}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hero-overlay/90 via-hero-overlay/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row min-h-[calc(100vh-128px)]">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center py-12 lg:py-24 lg:pr-16 lg:max-w-[55%]">
          <span className="text-primary-foreground/80 text-sm font-medium mb-4 tracking-wide">
            {industryLabel}
          </span>

          <div className="w-8 h-0.5 bg-primary mb-6" />

          <h1 className="text-4xl lg:text-6xl font-light text-primary-foreground mb-6 leading-tight">
            {title.light}
            <br />
            <span className="font-semibold">{title.bold}</span>
          </h1>

          <p className="text-xl text-primary-foreground/90 max-w-lg">
            {subtitle.line1}
            <br />
            {subtitle.line2}
          </p>
        </div>

        {/* Right Accordion */}
        <div className="lg:absolute lg:right-0 lg:top-24 lg:bottom-0 lg:w-[40%] bg-hero-overlay/95 backdrop-blur-sm">
          <div className="h-full flex flex-col">
            {accordionItems.map((item) => (
              <div
                key={item.id}
                className={`border-b border-primary-foreground/10 transition-all duration-300 ${
                  activeItem === item.id ? "flex-1" : ""
                }`}
              >
                <button
                  onClick={() =>
                    setActiveItem(activeItem === item.id ? "" : item.id)
                  }
                  className="w-full px-8 py-6 flex items-start justify-between text-left group"
                >
                  <span
                    className={`text-lg font-medium ${
                      activeItem === item.id
                        ? "text-primary-foreground"
                        : "text-primary-foreground/80"
                    } group-hover:text-primary-foreground`}
                  >
                    {item.title}
                  </span>

                  {activeItem === item.id ? (
                    <Minus className="h-5 w-5 text-primary-foreground/60" />
                  ) : (
                    <Plus className="h-5 w-5 text-primary-foreground/60" />
                  )}
                </button>

                {activeItem === item.id && (
                  <div className="px-8 pb-6 animate-fade-in">
                    <p className="text-primary-foreground/70 text-sm mb-4">
                      {item.content}
                    </p>

                    {item.link && (
                      <a
                        href={item.link}
                        className="text-primary text-sm font-medium inline-flex items-center gap-2"
                      >
                        Learn more
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
