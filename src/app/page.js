'use client'

import { ModalContextProvider } from '@/context/ModalContext'
import Cover from '@/views/Cover/Cover'

export default function Home() {
  return (
    <ModalContextProvider>
      <Cover />
    </ModalContextProvider>
  )
}
