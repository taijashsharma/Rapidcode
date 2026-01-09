import { resources } from "@/data/resourcesData";

const ResourcesSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-2xl font-light text-foreground mb-12">
          Go deeper with our banking and financial industry resources
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              className="group block"
            >
              <div className="overflow-hidden mb-4">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                {resource.title}
              </h3>

              <p className="text-sm text-muted-foreground">
                {resource.meta}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
