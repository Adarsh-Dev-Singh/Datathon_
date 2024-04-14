// ArtCards.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ArtCards.css';

const ArtCards = () => {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    fetch('/arts.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch events (${response.status} ${response.statusText})`,
          );
        }
        return response.json();
      })
      .then((data) => setArts(data.Arts))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);
  
  return (
    <div style={{ margin: '15px', padding: '15px' }} className='flex flex-wrap md:items-center'>
      {arts.map((art) => (
        <div key={art.id} className="w-full m-14 md:w-1/4 card">
          <div className="img-cover">
            <img src={art.urlToImage} alt="art" />
            <div className="icon">
              <svg
                width="23"
                height="18"
                viewBox="0 0 23 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 9H22M12 1.5L20.9333 8.2C21.4667 8.6 21.4667 9.4 20.9333 9.8L12 16.5"
                  stroke="black"
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>
          <div className="desc">
            <h1>{art.title}</h1>
            <p>{art.district.slice(0, 80)}</p>
            <h3>Total Cases : {art.cases.slice(0, 80)}</h3>
            <Link className="bg-zinc-900" to={`/arts/${art.id}`}>
              <button className="text-white font-bold rounded">
                See DashBoard
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtCards;
