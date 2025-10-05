import { useState, useMemo } from "react";
import Hero from "@/components/Hero";
import MovieRow from "@/components/MovieRow";
import BottomNav from "@/components/BottomNav";
import SearchBar from "@/components/SearchBar";
import movie1 from "@/assets/movie1.jpg";
import movie2 from "@/assets/movie2.jpg";
import movie3 from "@/assets/movie3.jpg";
import movie4 from "@/assets/movie4.jpg";
import movie5 from "@/assets/movie5.jpg";
import movie6 from "@/assets/movie6.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");

  const trendingMovies = [
    { id: 1, title: "Shadow Strike", image: movie1, rating: "8.5", genre: "Action" },
    { id: 2, title: "Cosmic Journey", image: movie2, rating: "9.0", genre: "Sci-Fi" },
    { id: 3, title: "Love in Paris", image: movie3, rating: "7.8", genre: "Romance" },
    { id: 4, title: "Dark Shadows", image: movie4, rating: "8.2", genre: "Horror" },
    { id: 5, title: "Magic Realm", image: movie5, rating: "8.7", genre: "Fantasy" },
    { id: 6, title: "City Lights", image: movie6, rating: "8.0", genre: "Drama" },
  ];

  const actionMovies = [
    { id: 7, title: "Thunder Force", image: movie1, rating: "8.3", genre: "Action" },
    { id: 8, title: "Steel Justice", image: movie6, rating: "7.9", genre: "Action" },
    { id: 9, title: "Phantom Ops", image: movie4, rating: "8.6", genre: "Action" },
    { id: 10, title: "War Machine", image: movie1, rating: "7.7", genre: "Action" },
    { id: 11, title: "Velocity", image: movie6, rating: "8.1", genre: "Action" },
    { id: 12, title: "Renegade", image: movie4, rating: "7.5", genre: "Action" },
  ];

  const sciFiMovies = [
    { id: 13, title: "Starbound", image: movie2, rating: "8.9", genre: "Sci-Fi" },
    { id: 14, title: "Quantum Shift", image: movie5, rating: "8.4", genre: "Sci-Fi" },
    { id: 15, title: "Beyond Earth", image: movie2, rating: "8.8", genre: "Sci-Fi" },
    { id: 16, title: "Time Paradox", image: movie5, rating: "8.2", genre: "Sci-Fi" },
    { id: 17, title: "Nova Prime", image: movie2, rating: "7.9", genre: "Sci-Fi" },
    { id: 18, title: "Galaxy's Edge", image: movie5, rating: "8.5", genre: "Sci-Fi" },
  ];

  const allMovies = [...trendingMovies, ...actionMovies, ...sciFiMovies];

  const filteredMovies = useMemo(() => {
    if (!searchQuery.trim()) return allMovies;
    
    const query = searchQuery.toLowerCase();
    return allMovies.filter(movie => 
      movie.title.toLowerCase().includes(query) ||
      movie.genre.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleSearchClear = () => {
    setSearchQuery("");
  };

  return (
    <main className="min-h-screen bg-background pb-20">
      {activeTab === "home" ? (
        <>
          <Hero />
          <div className="space-y-8 mt-8">
            <MovieRow title="Trending Now" movies={trendingMovies} />
            <MovieRow title="Action & Adventure" movies={actionMovies} />
            <MovieRow title="Sci-Fi Favorites" movies={sciFiMovies} />
          </div>
        </>
      ) : activeTab === "search" ? (
        <>
          <SearchBar 
            value={searchQuery} 
            onChange={setSearchQuery}
            onClear={handleSearchClear}
          />
          <div className="px-4 mt-6">
            {filteredMovies.length > 0 ? (
              <MovieRow title={searchQuery ? "Search Results" : "All Movies"} movies={filteredMovies} />
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No movies found matching "{searchQuery}"</p>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-[calc(100vh-5rem)]">
          <p className="text-muted-foreground text-lg">
            {activeTab === "library" ? "Your Library" : "Your Profile"}
          </p>
        </div>
      )}

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </main>
  );
};

export default Index;
