'use client'
import { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import { useTheme } from '../../../context/ThemeContext'
import { stylesMui } from '@/components/styles'
import AboutUsSection from '@/components/AboutUsSection/AboutUsSection'
import Paragraph from '@/components/AboutUsSection/Paragraph'

const AboutUs = () => {
  const { theme } = useTheme()
  const [isDark, setisDark] = useState(theme.palette.mode)

  useEffect(() => {
    if (theme.palette.mode === 'dark') {
      setisDark(true)
    } else {
      setisDark(false)
    }
  }, [theme])

  return (
    <>
      <div
        id='wrapper'
        className='min-h-screen'
        style={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        }}
      >
        <div
          className=' px-6 pt-6 lg:px-20 lg:pt-12'
          style={{
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
          }}
        >
          <Typography sx={stylesMui.h1}>About Pollenize</Typography>
        </div>
        <AboutUsSection />
      </div>
    </>
  )
}

export default AboutUs
