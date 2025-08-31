'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { Typography } from '@mui/material'

import { useTheme } from 'context/ThemeContext'

import { stylesMui } from '../styles'
import Paragraph from './Paragraph'

const AboutUsSection: React.FC<any> = () => {
  const { theme } = useTheme()
  const [isDark, setIsDark] = useState(theme.palette.mode)
  const router = useRouter()

  const section2 = [
    'New users sign in to the site using their X account.',
    'Join an open Hive. The more users in the Hive, the more effective the experience.',
    'Once in the Hive, you’ll find a list of posts to engage with (up to 20).',
    'Clicking on “View Post” opens the user’s post for engagement. After completing the engagement, a yellow checkmark confirms its completion.',
    'Once all 20 checkmarks are filled (or all available if less than 20 in the Hive) the "Create New Post" field opens for you to share your own content.',
    'Sit back and relax as other users support your content! Every engagement, post, referred user, and engagement by a referred user earns you Loyalty points.',
  ]
  const section3 = [
    'Likes are required as an engagement',
    'Comments and RTs are optional but encouraged, especially because they strengthen connections with other members',
    'Following each other is recommended to become friends',
    'Users who were inactive for 4 days are auto removed from their Hive',
    'Users can opt to exit a group 1 day after joining it',
  ]
  const section4 = [
    {
      id: 'a',
      text: 'The first and most likely: you’re shadow banned! Pollenize does not count engagements made by shadow banned accounts. To check if you’re shadow banned (NOTE: most shadowban websites no longer work):',
      subText: [
        'Use an account that does not follow you',
        'View your profile from this account',
        'Click on Replies to view your recent replies',
        'Click on a post your account replied to',
        'Scroll down and check to see if your reply was hidden as spam',
        'If it was hidden, take a break from using X or purchase a Blue checkmark until your shadow ban is lifted',
      ],
    },
    {
      id: 'b',
      text: 'There may be a broken link in the list. If a post you were sent to says it was deleted or edited, it cannot be engaged with. In this case, press the “scrap” button to the right of the link to remove it from your list',
    },
    {
      id: 'c',
      text: 'The account you connected to Pollenize Hive might not be the same account that’s signed in on X. This is an easy fix: sign into the right account!',
    },
    {
      id: 'd',
      text: 'You may have reached your “Like” limit on X. If this is the case, take a break from liking posts until it’s restored.',
    },
    {
      id: 'e',
      text: 'There’s a rare chance our backend failed to catch your engagement on a post. In this case, re-liking the post will fix it. If the list is long and you’re unsure which post failed, DM @PollenHive or @blupandaman on X and we will let you know!',
    },
  ]

  useEffect(() => {
    if (theme.palette.mode === 'dark') {
      setIsDark(true)
    } else {
      setIsDark(false)
    }
  }, [theme])

  return (
    <div
      id='summary'
      className='flex flex-col flex-nowrap px-6 pt-4 lg:px-20 lg:pt-12'
      style={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* ///////////////Section One /////////////////////////*/}
      <div
        className={`flex flex-col justify-start items-start rounded-[5px]  z-10 py-6 px-4 lg:px-12 mb-[2%] ${
          isDark ? 'bg-[#201D17] border-[#DCDCDC]' : 'bg-white border-[#DCDCDC]'
        }`}
        style={{
          color: theme.palette.text.primary,
          boxShadow: isDark ? 'none' : '0px 0px 15px 0px #3E3E3E1A',
          transition: 'transform 0.3s ease',
          border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.12)',
        }}
      >
        <Typography style={{ marginBottom: '2px' }} sx={stylesMui.h2}>
          What is Pollenize Hive?
        </Typography>
        <Paragraph text='Pollenize “Hive” is a web application designed to foster community and mutual growth on X. It brings together individuals from various backgrounds such as reply guys, artists, influencers, traders, and more, enabling them to support each other while necessitating reciprocal engagement. Within the Hive, all users are authentic individuals whose focus, facilitated by Pollenize, is on collective growth' />
        <Paragraph text='Pollenize “Hive” product is the ultimate (3,3) ethos in CT. Here, you support others and, in return, receive support in a transparent and fair manner.' />
        <Paragraph text='Additionally, Pollenize “Hive” serves as a platform where you can strategically engage with others to increase your account’s visibility and reach, all while earning Loyalty points along the way. By actively participating and interacting with other users, you not only amplify your account but also forge meaningful connections with like-minded individuals during your journey.' />
      </div>

      {/* ////////////////////Section 2////////////////////////// */}
      <div
        className={`flex flex-col justify-start items-start rounded-[5px]  z-10 py-6 px-4 lg:px-12 mb-[2%] ${
          isDark ? 'bg-[#201D17] border-[#DCDCDC]' : 'bg-white border-[#DCDCDC]'
        }`}
        style={{
          color: theme.palette.text.primary,
          boxShadow: isDark ? 'none' : '0px 0px 15px 0px #3E3E3E1A',
          transition: 'transform 0.3s ease',
          border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.12)',
        }}
      >
        <Typography style={{ marginBottom: '2px' }} sx={stylesMui.h2}>
          How Does it Work?
        </Typography>

        {section2.map((text: string, index: number) => {
          return (
            <>
              <div key={index} className='flex items-center gap-2'>
                <p className='m-0 pt-[6px] self-baseline font-roboto text-[16px] leading-[26px] font-normal'>
                  {index + 1}.
                </p>
                <Paragraph text={text} />
              </div>
            </>
          )
        })}
      </div>
      {/* ////////////////////Section 3////////////////////////// */}
      <div
        className={`flex flex-col justify-start items-start rounded-[5px]  z-10 py-6 px-4 lg:px-12 mb-[2%] ${
          isDark ? 'bg-[#201D17] border-[#DCDCDC]' : 'bg-white border-[#DCDCDC]'
        }`}
        style={{
          color: theme.palette.text.primary,
          boxShadow: isDark ? 'none' : '0px 0px 15px 0px #3E3E3E1A',
          transition: 'transform 0.3s ease',
          border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.12)',
        }}
      >
        <Typography style={{ marginBottom: '2px' }} sx={stylesMui.h2}>
          Important Notes
        </Typography>

        {section3.map((text: string, index: number) => {
          return (
            <>
              <div key={index} className='flex items-center gap-2'>
                <p className='m-0 pt-[6px] self-baseline font-roboto text-[16px] leading-[26px] font-normal'>
                  {index + 1}.
                </p>
                <Paragraph text={text} />
              </div>
            </>
          )
        })}
      </div>

      {/* //////////////////////Section Four/////////////////////////*/}
      <div
        className={`flex flex-col justify-start items-start rounded-[5px]  z-10 py-6 px-4 lg:px-12 mb-[2%] ${
          isDark ? 'bg-[#201D17] border-[#DCDCDC]' : 'bg-white border-[#DCDCDC]'
        }`}
        style={{
          color: theme.palette.text.primary,
          boxShadow: isDark ? 'none' : '0px 0px 15px 0px #3E3E3E1A',
          transition: 'transform 0.3s ease',
          border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.12)',
        }}
      >
        <Typography style={{ marginBottom: '2px' }} sx={stylesMui.h2}>
          I did everything, but failed verifying my engagement. Why?
        </Typography>
        <Paragraph text='There may be a broken link in the list. If a post you were sent to says it was deleted or edited, it cannot be engaged with. In this case, DM @Pollenizelabs on X.' />
        <Paragraph text='The account you connected to Pollenize Hive might not be the same account that’s signed in on X. This is an easy fix: sign into the right account!.' />
        <Paragraph text='You may have reached your “Like” limit on X. If this is the case, take a break from liking posts until it’s restored.' />
        <Paragraph text='If none of these resolved your issue, DM @Pollenizelabs on X.' />
      </div>
    </div>
  )
}

export default AboutUsSection
