const navItems = [
  { label: "What we do", href: "#what-we-do" },
  { label: "How we help", href: "#how-we-help" },
  { label: "Trends and insights", href: "#trends-and-insights" },
  { label: "Our customers", href: "#our-customers" },
  { label: "Our partners", href: "#our-partners" },
  { label: "Connect with us", href: "#connect-with-us" },
];

function JumpToNav() {
  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center overflow-x-auto scrollbar-hide">
          
          <span className="text-sm text-muted-foreground mr-6 whitespace-nowrap py-4">
            Jump to ...
          </span>

          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-4 text-sm font-medium text-foreground whitespace-nowrap
                           border-b-2 border-transparent hover:text-primary hover:border-primary
                           transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

        </div>
      </div>
    </nav>
  );
}

export default JumpToNav;
