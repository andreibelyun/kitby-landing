'use client'

import st from './Cover.module.scss'
import Button from '@/components/Button/Button'
import { useModal } from '@/context/useModal'

const Cover = () => {
  const { openModal } = useModal()

  return (
    <section className={st.contaienr}>
      <Button onClick={openModal}>Hello</Button>
    </section>
  )
}

export default Cover
