import { Play, Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface MovieCardProps {
  title: string;
  image: string;
  rating: string;
  genre: string;
}

const MovieCard = ({ title, image, rating, genre }: MovieCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border bg-card transition-all duration-300 hover:scale-105 hover:shadow-glow cursor-pointer flex-shrink-0 w-[200px] md:w-[240px]">
      <div className="aspect-[2/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
          <h3 className="font-bold text-white text-lg line-clamp-1">{title}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span className="text-primary font-semibold">{rating}</span>
            <span>•</span>
            <span>{genre}</span>
          </div>
          <div className="flex gap-2 pt-2">
            <Button size="sm" variant="default" className="bg-primary hover:bg-primary/90 h-8">
              <Play className="h-3 w-3 mr-1" />
              Play
            </Button>
            <Button size="sm" variant="secondary" className="bg-secondary hover:bg-secondary/80 h-8">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;
