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
    <div style={{ color: 'white' }}>
      <h2>{title}</h2>
      <ul>
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`${imageBaseURL + movie.poster_path}`}
            alt=""
            width="300"
          />
        ))}
      </ul>
    </div>
  );
};

export default Row;
