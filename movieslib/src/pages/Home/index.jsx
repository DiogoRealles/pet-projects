import { useState, useEffect } from "react";
import MovieCard from '../../components/MovieCard';
import { key, url } from "../../services/api-data";

const moviesURL = url;
const apiKey = key;

const Index = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async(url) => {
    const response = await fetch(url);
    const data = await response.json();
    setTopMovies(data.results);
  }

  useEffect(() => {
    const topRatedurl = `${moviesURL}top_rated?api_key=${apiKey}`;

    getTopRatedMovies(topRatedurl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Top movies</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Loading...</p>}
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default Index
