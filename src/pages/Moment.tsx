import CreateAMomentPage from '@/components/moment-page/CreateAMomentPage'
import { useTranslations } from 'next-intl'
import React from 'react'

function Moment() {
    const t = useTranslations("MomentPage")
    
  return (
    <CreateAMomentPage/>
  )
}

export default Moment