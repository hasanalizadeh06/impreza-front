"use client"
import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import './Artists.scss';

import img from "@/../public/assets/home/artists/img.png" 

interface Artist {
    id: number;
    image: StaticImageData;
}

const Content = () => {
  // const [category, setCategory] = useState('All');
  // const [location, setLocation] = useState('All');
  // const [availability, setAvailability] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const generateArtists = (): Artist[] => {
    return Array.from({ length: 32 }, (_, i) => ({
      id: i + 1,
      image: img,
    }));
  };

  const artists = generateArtists();
  const totalPages = Math.ceil(artists.length / itemsPerPage);
  
  const displayedArtists = artists.slice(
    0,
    currentPage * itemsPerPage
  );

  const loadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="artists-container">
      <h1>Artists</h1>
      
      <div className="filter-container">
        <div className="filter-dropdown">
          <button className="filter-button">
            <span className="filter-icon">☰</span> Category
          </button>
        </div>
        
        <div className="filter-dropdown">
          <button className="filter-button">
            <span className="filter-icon">📍</span> Location
          </button>
        </div>
        
        <div className="filter-dropdown">
          <button className="filter-button">
            <span className="filter-icon">📅</span> Availability
          </button>
        </div>
      </div>
      
      <div className="artists-grid">
        {displayedArtists.map((artist) => (
          <div key={artist.id} className="artist-card">
            <div className="artist-image-container">
              <Image 
                src={artist.image} 
                alt="Artist" 
                fill
                className="artist-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>
      
      {currentPage < totalPages && (
        <button className="load-more-button" onClick={loadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default Content;