'use client'

import st from './Header.module.scss'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useModal } from '@/context/useModal'
import clsx from 'clsx'
import Logo from '../Logo/Logo'
import ChFlag from '../ChFlag/ChFlag'
import Button from '../Button/Button'
import Contacts from './Contacts/Contacts'
import HeaderMenu from './HeaderMenu/HeaderMenu'
import IconMenu from '@/assets/svg/IconMenu'
import { disableScroll, enableScroll } from '@/utils/scroll'

const Header = () => {
  const { openModal } = useModal()
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }

  const onLeaveSimpleReqBtnClick = () => {
    openModal('simpleRequest')
  }

  useEffect(() => {
    isMenuOpen ? disableScroll() : enableScroll()
  }, [isMenuOpen])

  return (
    <header className={st.container}>
      <div className={st.headerTop}>
        <Link href='/'>
          <Logo className={st.logo} />
        </Link>
        <button onClick={toggleMenu} className={clsx(st.menuBtn, { [st.closeBtn]: isMenuOpen })}>
          {isMenuOpen ? <IconClose /> : <IconMenu />}
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

const IconClose = () => (
  <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect x='2.98364' width='36.9032' height='4.19355' rx='1' transform='rotate(45 2.98364 0)' fill='white' />
    <rect
      x='29.0782'
      y='2.96533'
      width='36.9032'
      height='4.19355'
      rx='1'
      transform='rotate(135 29.0782 2.96533)'
      fill='white'
    />
  </svg>
)
