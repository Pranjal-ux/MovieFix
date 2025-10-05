import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import MovieCard from "./MovieCard";
import { Button } from "@/components/ui/button";

interface Movie {
  id: number;
  title: string;
  image: string;
  rating: string;
  genre: string;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

const MovieRow = ({ title, movies }: MovieRowProps) => {
  return (
    <div className="space-y-4 px-6 md:px-12 lg:px-16 mb-8 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
      
      <div className="relative group">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex gap-4 pb-4">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                image={movie.image}
                rating={movie.rating}
                genre={movie.genre}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="hidden md:flex" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default MovieRow;
