import React, { useState, useEffect } from 'react';
import axios, { imageBaseURL } from '../api/axios';
import '../styles/Row.css';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
    }

    fetchMovies();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) =>
          (isLargeRow && movie.poster_path) ||
          (!isLargeRow && movie.backdrop_path) ? (
            <img
              className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
              key={movie.id}
              src={`${imageBaseURL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt="Poster not found"
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default Row;
