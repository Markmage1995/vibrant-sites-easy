import { Check, RefreshCw, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Check,
      title: "Venle tus Productos",
      description: "llt Uua ipsum venel tse!!Centrrt ard the tuines leis llo ocuua A ttittes is gacoaa tosy/ornde tet ait entalne tone apti."
    },
    {
      icon: RefreshCw,
      title: "Intercaimbia uuth Others",
      description: "It thsa tovlo olui elivnore t ond liowve the munisss and llo gexiabistr att bianctta-tt orlta hamas elt ee brunaa tanbialy."
    },
    {
      icon: TrendingUp,
      title: "Conecta & Organiza",
      description: "I!t thes ipsum ttlirlee nst metikiive wr the nsing ske is oiite and dthnsms tugalis at a nast thais ar acniegtmre to nsa apd."
    }
  ];

  return (
    <section className="w-full bg-background py-20" id="features">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;