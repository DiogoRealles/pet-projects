import { useEffect, useState } from 'react';
import {useSearchParams} from 'react-router-dom'
import MovieCard from '../../components/MovieCard';

import { key, searchURL } from "../../services/api-data";

const Index = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('q');

  const getSearchedMovies = async(url) => {
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
  }

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?api_key=${key}&query=${query}`;

    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">Results to: <span className='query-text'>{query}</span></h2>
      <div className="movies-container">
        {movies.length === 0 && <p>Loading...</p>}
        {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default Index
