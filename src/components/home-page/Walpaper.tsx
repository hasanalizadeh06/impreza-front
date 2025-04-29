import Image from 'next/image'
import React from 'react'

import img from '@/../public/assets/walpaper.png'


function Walpaper() {
  return (
    <Image src={img} className='walpaper' alt=''/>
  )
}

export default Walpaper