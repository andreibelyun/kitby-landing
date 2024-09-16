'use client'

import Cover from '@/views/Cover/Cover'
import WhyUs from '@/views/WhyUs/WhyUs'
import Services from '@/views/Services/Services'
import Team from '@/views/Team/Team'
import Advertising from '@/views/Advertising/Advertising'
import InterestingProducts from '@/views/InterestingProducts/InterestingProducts'
import StillHaveQuestions from '@/views/StillHaveQuestions/StillHaveQuestions'

export default function Home() {
  return (
    <>
      <Cover />
      <WhyUs />
      <Services />
      <Team />
      <Advertising />
      <InterestingProducts />
      <StillHaveQuestions />
    </>
  )
}
