import React from 'react'
import './Home.scss';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';

import img from '@/../public/assets/home/gifts/img1.png'
import Image from 'next/image';

function Gifts() {
    const gifts = [
        {
          id: 1,
          title: 'Violin Performance',
          image: img,
          description: 'A candle-lit room, soft music, and a violinist playing your favorite love song – live, right in your living room.',
          perfectFor: 'Anniversaries, birthdays, proposals',
          rating: 4.0,
          reviews: 120,
          price: 100
        },
        {
          id: 2,
          title: 'Violin Performance',
          image: img,
          description: 'A candle-lit room, soft music, and a violinist playing your favorite love song – live, right in your living room.',
          perfectFor: 'Anniversaries, birthdays, proposals',
          rating: 4.0,
          reviews: 120,
          price: 100
        },
        {
          id: 3,
          title: 'Violin Performance',
          image: img,
          description: 'A candle-lit room, soft music, and a violinist playing your favorite love song – live, right in your living room.',
          perfectFor: 'Anniversaries, birthdays, proposals',
          rating: 4.0,
          reviews: 120,
          price: 100
        },
        {
          id: 4,
          title: 'Violin Performance',
          image: img,
          description: 'A candle-lit room, soft music, and a violinist playing your favorite love song – live, right in your living room.',
          perfectFor: 'Anniversaries, birthdays, proposals',
          rating: 4.0,
          reviews: 120,
          price: 100
        },
        {
          id: 5,
          title: 'Violin Performance',
          image: img,
          description: 'A candle-lit room, soft music, and a violinist playing your favorite love song – live, right in your living room.',
          perfectFor: 'Anniversaries, birthdays, proposals',
          rating: 4.0,
          reviews: 120,
          price: 100
        }
      ];
  return (
    <section className="top-gifts">
      <div className="container">
        <h2 className="top-gifts-title">Top 5 Unforgettable Gifts on Impreza</h2>
        
        <div className="gifts-grid">
          {gifts.slice(0, 5).map((gift) => (
            <div className="gift-card" key={gift.id}>
              <div className="gift-image-container">
                <Image 
                  src={gift.image} 
                  alt={gift.title} 
                  className="gift-image"
                />
                <button className="favorite-button">
                  <AiOutlineHeart />
                </button>
              </div>
              
              <div className="gift-content">
                <h3 className="gift-title">{gift.title}</h3>
                <p className="gift-description">{gift.description}</p>
                <p className="gift-perfect-for">Perfect for: {gift.perfectFor}</p>
                
                <div className="gift-ratings">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <AiFillStar 
                        key={i} 
                        className={i < Math.floor(gift.rating) ? "star filled" : "star"} 
                      />
                    ))}
                  </div>
                  <span className="rating-text">{gift.rating.toFixed(1)} ({gift.reviews})</span>
                </div>
                
                <p className="gift-price">From ${gift.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gifts