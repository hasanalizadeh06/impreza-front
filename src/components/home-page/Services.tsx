import React from 'react'

import img1 from '@/../public/assets/home/services/img1.png'
import img2 from '@/../public/assets/home/services/img2.png'
import img3 from '@/../public/assets/home/services/img3.png'
import img4 from '@/../public/assets/home/services/img4.png'
import img5 from '@/../public/assets/home/services/img5.png'
import img6 from '@/../public/assets/home/services/img6.png'
import Image from 'next/image'

function Services() {
    const serviceItems = [
        {
          title: 'Live performance',
          image: img1,
          alt: 'Woman in red dress playing violin'
        },
        {
          title: 'Live Painting',
          image: img2,
          alt: 'Artist creating portrait painting'
        },
        {
          title: 'Private singing',
          image: img3,
          alt: 'Singing couple performing'
        },
        {
          title: 'Mini theatre',
          image: img4,
          alt: 'Performer on stage with red curtain'
        },
        {
          title: 'Suprise photoshoot',
          image: img5,
          alt: 'Photographer taking pictures'
        },
        {
          title: 'Cultural dance show',
          image: img6,
          alt: 'Cultural dancers performing'
        }
      ];
  return (
    <section className="services">
        <div className="container">
            <h2 className="services-title">Services we offer</h2>
            <div className="services-grid">
                {serviceItems.map((service, index) => (
                <div className="service-card" key={index}>
                    <div className="service-image-container">
                    <Image
                        src={service.image} 
                        alt={service.alt} 
                        className="service-image"
                    />
                    <div className="service-label">
                        <h3>{service.title}</h3>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Services