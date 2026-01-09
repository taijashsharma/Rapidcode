import { ArrowRight } from "lucide-react";

const RegulationSection = ({
  heading,
  subText,
  highlightText,
  links,
}) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-3xl lg:text-5xl font-light text-foreground mb-6 leading-tight">
            {heading}
          </h2>

          <p className="text-lg text-muted-foreground mb-4">
            {subText}
          </p>

          <p className="text-xl font-semibold text-primary mb-12">
            {highlightText}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {links.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="group p-6 border border-border hover:border-primary transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <span className="text-primary text-sm font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegulationSection;
