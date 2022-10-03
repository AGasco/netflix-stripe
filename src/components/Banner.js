import React, { useState, useEffect } from 'react';
import axios, { imageBaseURL } from '../api/axios';
import requests from '../api/requests';
import '../styles/Banner.css';

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.fetchNetflixOriginals);
      let randomMovie =
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ];

      while (!randomMovie) {
        console.log('Selecting a new random movie');
        randomMovie =
          response.data.results[
            Math.floor(Math.random() * response.data.results.length - 1)
          ];
      }

      setMovie(randomMovie);
    }

    fetchData();
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + '...' : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${
          imageBaseURL + (movie?.backdrop_path || movie?.poster_path)
        })`,
        backgroundPosition: 'center center'
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
