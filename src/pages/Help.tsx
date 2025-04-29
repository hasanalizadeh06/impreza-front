import Faq from '@/components/help-page/Content'
import { useTranslations } from 'next-intl'
import React from 'react'

function Help() {
    const t = useTranslations("HelpPage")
    
  return (
    <Faq/>
  )
}

export default Help