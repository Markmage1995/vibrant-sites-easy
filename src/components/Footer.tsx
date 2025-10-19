import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-muted-foreground">
            <span>Feermstaiundae.com</span>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4">
              <span>Siemresuji</span>
              <span>Sesá Np...</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span>Usern fa orbustsek</span>
              <span>Pennts tovriieisue</span>
              <span>Reatim##///ikFlowmind.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;