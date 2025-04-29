import ArtistsPage from '@/components/artists-page/ArtistsPage'
import { useTranslations } from 'next-intl'
import React from 'react'

function Artists() {
    const t = useTranslations("AboutPage")
    
  return (
    <ArtistsPage/>
  )
}

export default Artists