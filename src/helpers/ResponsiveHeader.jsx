import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Header } from '../components/Header/Header'
import { HeaderMobile } from '../components/HeaderMobile/HeaderMobile'

export const ResponsiveHeader = () => {
    const screenPc = useMediaQuery({ query: '(min-width: 820px)' })
    
  return (
    <>
        {
            screenPc?
                <Header />
            :
                <HeaderMobile />
        }
    </>
  )
}
