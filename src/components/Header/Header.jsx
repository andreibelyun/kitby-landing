'use client'

import st from './Header.module.scss'
import { useState } from 'react'
import { useModal } from '@/context/useModal'
import clsx from 'clsx'
import Logo from '../Logo/Logo'
import ChFlag from '../ChFlag/ChFlag'
import Button from '../Button/Button'
import Contacts from './Contacts/Contacts'
import HeaderMenu from './HeaderMenu/HeaderMenu'
import IconX from '@/assets/svg/IconX'
import IconMenu from '@/assets/svg/IconMenu'

const Header = () => {
  const { openModal } = useModal()
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }

  const onLeaveSimpleReqBtnClick = () => {
    openModal('simpleRequest')
  }

  return (
    <header className={st.container}>
      <div className={st.headerTop}>
        <Logo className={st.logo} />
        <button onClick={toggleMenu} className={clsx(st.menuBtn, { [st.closeBtn]: isMenuOpen })}>
          {isMenuOpen ? <IconX /> : <IconMenu />}
        </button>
      </div>

      <h4 className={st.slogan}>
        ваш надежный партнёр&nbsp;
        <br />в поставках из Китая&nbsp;
        <ChFlag className={st.flag} />
      </h4>

      <Contacts withoutPhoneIcon className={st.contacts} />

      <Button onClick={onLeaveSimpleReqBtnClick} className={st.btn} size='small' style={{ width: '150px' }}>
        Оставить
        <br />
        заявку
      </Button>

      {isMenuOpen && (
        <HeaderMenu
          closeMenu={() => {
            setMenuOpen(false)
          }}
        />
      )}
    </header>
  )
}

export default Header
