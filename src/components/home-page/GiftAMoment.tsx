import Image from 'next/image'
import React from 'react'

import img from '@/../public/assets/home/gift-a-moment/img.png'

function GiftAMoment() {
  return (
    <section className="home-gift-container">
      <h1 className="gift-title">What If You Could Gift a Moment?</h1>
      <div className="gift-grid">
        <div className="gift-card">
          <Image src={img} alt="Birthday moment 1" />
          <p>It’s her birthday. She thinks you’re bringing cake.</p>
        </div>
        <div className="gift-card">
          <Image src={img} alt="Birthday moment 2" />
          <p>She opens the door… there’s a violinist, playing her favorite song.</p>
        </div>
        <div className="gift-card">
          <Image src={img} alt="Birthday moment 3" />
          <p>She laughs. She cries. You smile.</p>
        </div>
        <div className="gift-message">
          <p>You didn’t just gift something. You gifted a feeling.</p>
          <button className="gift-button">Book an experience</button>
        </div>
      </div>
    </section>
  )
}

export default GiftAMoment