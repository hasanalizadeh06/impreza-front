import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import img from '@/../public/assets/home/artists/img.png';

function Artists() {
    const artists = [
        { id: 1, name: 'Artist 1', image: img },
        { id: 2, name: 'Artist 2', image: img },
        { id: 3, name: 'Artist 3', image: img },
        { id: 4, name: 'Artist 4', image: img },
      ];
    
      return (
        <section className="artists-section">
          <div className="section-header">
            <h2 className="section-title">Meet the Artists</h2>
            <Link href="/artists" className="view-all">
              View all artists
            </Link>
          </div>
    
          <div className="artists-grid">
            {artists.map((artist) => (
              <div key={artist.id} className="artist-card">
                <div className="image-container">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    width={280}
                    height={340}
                    className="artist-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
  )
}

export default Artists