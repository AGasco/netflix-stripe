import React from 'react';
import '../styles/Banner.css';

const Banner = () => {
  const truncate = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + '...' : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://linitiative.ca/wp-content/uploads/2018/02/netflix-banner.jpg')`,
        backgroundPosition: 'center center'
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          eveniet ipsa quas qui dicta sint quia odit laborum, laboriosam
          deserunt dignissimos, culpa, aspernatur beatae tenetur in eius itaque
          soluta veniam!`,
            150
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
