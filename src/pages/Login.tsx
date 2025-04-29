import LoginPage from '@/components/login-page/LoginPage'
import { useTranslations } from 'next-intl'
import React from 'react'

function Login() {
    const t = useTranslations("LoginPage")
    
  return (
    <LoginPage/>
  )
}

export default Login