import { Button } from "@/components/ui/button";
import phoneMockup from "@/assets/phone-hand-mockup.png";
import { Apple, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full bg-[hsl(var(--hero-bg))] relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-[hsl(var(--decorative-pink))] opacity-60 blur-2xl animate-float"></div>
      <div className="absolute top-40 right-20 w-12 h-12 rounded-full bg-[hsl(var(--decorative-purple))] opacity-60 blur-xl animate-float-delayed"></div>
      <div className="absolute bottom-40 left-1/4 w-20 h-20 rounded-full bg-[hsl(var(--decorative-orange))] opacity-40 blur-2xl animate-float"></div>
      <div className="absolute top-1/2 right-1/3 w-8 h-8 rounded-full bg-[hsl(var(--decorative-pink))] opacity-50"></div>
      <div className="absolute bottom-1/3 left-1/2 w-6 h-6 rounded-full bg-[hsl(var(--decorative-purple))] opacity-50"></div>
      
      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">NicaTrueque:</span><br />
              <span className="text-[hsl(var(--primary))]">Vende, Cambia</span><br />
              <span className="text-foreground">& Conecta</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground max-w-md">
              Tu marketplace por vender, interanbnscar products y connect ccth tuu communidlay
            </p>
          </div>

          <div className="relative flex flex-col items-center gap-6 z-10">
            <div className="relative">
              <img 
                src={phoneMockup} 
                alt="NicaTrueque App" 
                className="w-48 md:w-64 drop-shadow-2xl animate-float-slow"
              />
              {/* Additional decorative circles around phone */}
              <div className="absolute -top-8 -right-8 w-16 h-16 rounded-full bg-[hsl(var(--decorative-orange))] opacity-70 flex items-center justify-center text-white font-bold">
                A
              </div>
            </div>
            
            <div className="flex flex-col gap-3 items-center">
              <Button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-6 text-base">
                Download on the App Store
              </Button>
              <div className="flex gap-3">
                <Button variant="outline" className="bg-black text-white hover:bg-gray-800 border-black">
                  <Apple className="mr-2 h-5 w-5 text-blue-500" />
                  App Store
                </Button>
                <Button variant="outline" className="bg-black text-white hover:bg-gray-800 border-black">
                  <Play className="mr-2 h-5 w-5 text-green-500" />
                  Google Play
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;