import {
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
  Instagram,
} from "lucide-react";

const footerLinks = {
  explore: [
    { label: "Services", href: "#" },
    { label: "Industries", href: "#" },
    { label: "Insights", href: "#" },
    { label: "Consulting", href: "#" },
  ],
  aboutUs: [
    { label: "About RapidCode", href: "#" },
    { label: "Leadership", href: "#" },
    { label: "Alliances", href: "#" },
    { label: "Corporate responsibility", href: "#" },
    { label: "Investor relations", href: "#" },
    { label: "News", href: "#" },
  ],
  careers: [
    { label: "Search jobs", href: "#" },
    { label: "Life at RapidCode", href: "#" },
    { label: "Early careers", href: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const bottomLinks = [
  "Accessibility",
  "Cookie preferences",
  "Privacy",
  "Terms of use",
  "Contact us",
];

function Footer() {
  return (
    <footer className="bg-kyndryl-navy text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold">rapid</span>
              <span className="text-2xl font-bold text-red-500">code</span>
            </a>

            <p className="text-white/60 text-sm mb-6 max-w-xs">
              The heart of progress
            </p>

            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              About us
            </h4>
            <ul className="space-y-3">
              {footerLinks.aboutUs.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Careers */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Careers
            </h4>
            <ul className="space-y-3">
              {footerLinks.careers.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © 2025 RapidCode, Inc.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
              {bottomLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white/40 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
