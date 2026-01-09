import React from "react";

const MarqueeSection = ({
  text,
  repeatCount = 4,
  bgClass = "bg-primary",
  hoverBgClass = "",
}) => {
  return (
    <section
      className={`${bgClass} py-4 overflow-hidden cursor-pointer transition-colors ${hoverBgClass}`}
    >
      <div className="marquee-container">
        <div className="marquee-content text-primary-foreground text-sm font-medium">
          {[...Array(repeatCount)].map((_, i) => (
            <span key={i} className="whitespace-nowrap">
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
