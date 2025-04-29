import Image from 'next/image'
import React from 'react'

import img from '@/../public/assets/walpaper.png'


function Walpaper() {
  return (
    <div>
      <Image src={img} className='walpaper' alt=''/>
      <h1 className='walpaper-text'>About Us</h1>
    </div>
  )
}

export default Walpaper