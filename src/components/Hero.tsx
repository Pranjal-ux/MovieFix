import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-movie.jpg";

const Hero = () => {
  return (
    <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Featured Movie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
      </div>

      <div className="relative h-full flex flex-col justify-center px-6 md:px-12 lg:px-16 max-w-2xl animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground">
          The Last Frontier
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 line-clamp-3">
          In a world on the brink of collapse, one hero must venture into the unknown 
          to save humanity. An epic journey filled with danger, mystery, and breathtaking action.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
            <Play className="mr-2 h-5 w-5" />
            Play Now
          </Button>
          <Button size="lg" variant="secondary" className="bg-secondary/80 hover:bg-secondary">
            <Info className="mr-2 h-5 w-5" />
            More Info
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
