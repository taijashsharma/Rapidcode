import { stats } from "./statsData";

const StatsSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-start gap-8 mb-16">
          <div className="text-7xl lg:text-9xl font-light text-primary/20">
            03
          </div>
          <div className="pt-4">
            <div className="text-4xl lg:text-6xl font-light text-foreground">
              things
            </div>
            <div className="text-4xl lg:text-6xl font-light text-foreground">
              to know
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {stats.map((stat) => (
            <div key={stat.number} className="relative">
              <div className="absolute -left-4 top-0 text-6xl font-light text-primary/20">
                {stat.number}
              </div>
              <div className="pl-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  {stat.highlight}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {stat.description}
                </p>
                <a
                  href={stat.sourceLink}
                  className="text-sm text-primary hover:underline"
                >
                  Source: {stat.source}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
