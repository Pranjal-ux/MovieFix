import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Plus, Share2, Heart } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MovieDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, image, rating, genre } = location.state || {};
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out"
      });
    }
  }, []);

  if (!title) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground">Movie not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <div ref={containerRef}>
        {/* Hero Section */}
        <div className="relative h-[60vh] md:h-[70vh]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          
          {/* Back Button */}
          <Button
            onClick={() => navigate(-1)}
            variant="ghost"
            className="absolute top-6 left-6 bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm"
            size="icon"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="px-6 md:px-12 lg:px-16 -mt-32 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              {title}
            </h1>
            
            <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
              <span className="text-primary text-lg font-bold">{rating}</span>
              <span>•</span>
              <span>{genre}</span>
              <span>•</span>
              <span>2024</span>
              <span>•</span>
              <span>2h 15m</span>
            </div>

            <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Experience an unforgettable journey through this captivating story. 
              With stunning visuals and compelling performances, this film delivers 
              an immersive entertainment experience that will keep you on the edge of your seat.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 h-12 px-8">
                <Play className="h-5 w-5 mr-2" />
                Play Now
              </Button>
              <Button size="lg" variant="secondary" className="h-12 px-6">
                <Plus className="h-5 w-5 mr-2" />
                My List
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-6">
                <Heart className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-6">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Additional Info */}
            <div className="space-y-4 text-sm">
              <div>
                <span className="text-muted-foreground">Cast: </span>
                <span className="text-foreground">John Doe, Jane Smith, Mike Johnson</span>
              </div>
              <div>
                <span className="text-muted-foreground">Director: </span>
                <span className="text-foreground">Christopher Roberts</span>
              </div>
              <div>
                <span className="text-muted-foreground">Genres: </span>
                <span className="text-foreground">{genre}, Drama, Thriller</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
