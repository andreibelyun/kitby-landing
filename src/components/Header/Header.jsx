'use client'

import st from './Header.module.scss'
import Logo from '../Logo/Logo'
import IconMail from '@/assets/svg/IconMail'
import Button from '../Button/Button'
import { CONTACT_EMAIL, PHONE_NUMBER, READABLE_PHONE_NUMBER } from '@/constants/contacts'
import { useModal } from '@/context/useModal'

const Header = () => {
  const { openModal } = useModal()

  const onLeaveSimpleReqBtnClick = () => {
    openModal('simpleRequest')
  }

  return (
    <header className={st.container}>
      <Logo />

      <h4 className={st.slogan}>
        ваш надежный партнёр
        <br />в поставках из Китая&nbsp;
        <span className={st.flag}>🇨🇳</span>
      </h4>

      <div className={st.contacts}>
        <a href={`mailto:${CONTACT_EMAIL}`} className={st.email}>
          <IconMail />
          <span>{CONTACT_EMAIL}</span>
        </a>

        <a href={`tel:${PHONE_NUMBER}`} className={st.phone}>
          {READABLE_PHONE_NUMBER}
        </a>
      </div>

      <Button onClick={onLeaveSimpleReqBtnClick} className={st.btn} size='small' style={{ width: '150px' }}>
        Оставить
        <br />
        заявку
      </Button>
    </header>
  )
}

export default Header
