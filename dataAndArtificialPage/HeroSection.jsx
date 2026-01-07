import heroImage from "../../../assets/image4.mp4";
import { ArrowRight } from "lucide-react";

const heroCards = [
  {
    title: "Realize business value with end-to-end data and AI transformation",
    link: "Read the solution brief",
    href: "#",
  },
  {
    title: "Are you at the readiness tipping point?",
    link: "Read the report",
    href: "#",
  },
  {
    title: "RapidCode named a Leader in Data Center Outsourcing Services",
    link: "Learn more",
    href: "#",
  },
];

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-stretch overflow-hidden">
      
          <video
                          className="absolute inset-0 w-full h-full object-cover z-0"
                          src={heroImage}
                          autoPlay
                          loop
                          muted
                          playsInline
                      />
      {/* Left Side */}
      <div className="relative w-full lg:w-[65%] min-h-[60vh] lg:min-h-full">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-16 py-20 lg:py-32">
          
          {/* Breadcrumb */}
          <div className="mb-6">
            <a
              href="#"
              className="text-white/80 hover:text-white text-sm font-medium border-b border-white/40 pb-1"
            >
              Services
            </a>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-xl">
            Data and Artificial Intelligence Services
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 max-w-lg leading-relaxed">
            Unlocking value from data and AI faster to help you scale and transform
            your digital business
          </p>
        </div>
      </div>

      {/* Right Side Cards (Desktop) */}
      <div className="hidden lg:flex w-[35%] bg-black/70
 flex-col z-20">
        {heroCards.map((card, index) => (
          <a
            key={index}
            href={card.href}
            className="flex-1 p-8 xl:p-10 flex flex-col justify-center border-b border-white/10 last:border-b-0 hover:bg-white/5 transition-colors group"
          >
            <h3 className="text-xl xl:text-2xl font-semibold text-white mb-4 leading-snug">
              {card.title}
            </h3>
            <span className="text-white/70 text-sm font-medium inline-flex items-center group-hover:text-white">
              {card.link}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        ))}
      </div>

      {/* Mobile Card */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-primary">
        {heroCards.slice(0, 1).map((card, index) => (
          <a
            key={index}
            href={card.href}
            className="block p-6 border-b border-white/10"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              {card.title}
            </h3>
            <span className="text-white/70 text-sm font-medium inline-flex items-center">
              {card.link}
              <ArrowRight className="ml-2 w-4 h-4" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
