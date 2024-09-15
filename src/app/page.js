'use client'

import { ModalContextProvider } from '@/context/ModalContext'
import Cover from '@/views/Cover/Cover'
import WhyUs from '@/views/WhyUs/WhyUs'
import Services from '@/views/Services/Services'
import Team from '@/views/Team/Team'

export default function Home() {
  return (
    <ModalContextProvider>
      <Cover />
      <WhyUs />
      <Services />
      <Team />
    </ModalContextProvider>
  )
}
