import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NicaTrueque
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </a>
            <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors">
              Download
            </a>
          </nav>

          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;