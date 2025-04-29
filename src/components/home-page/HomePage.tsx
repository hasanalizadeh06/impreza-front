import React from 'react'
import Walpaper from './Walpaper'
import Services from './Services'
import HowItWorks from './HowItWorks'
import Gifts from './Gifts'
import Artists from './Artists'
import GiftAMoment from './GiftAMoment'
import './Home.scss'

function HomePage() {
  return (
    <div>
        <Walpaper/>
        <Services/>
        <HowItWorks/>
        <Gifts/>
        <Artists/>
        <GiftAMoment/>
    </div>
  )
}

export default HomePage