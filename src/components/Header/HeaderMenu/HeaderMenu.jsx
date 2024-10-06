import st from './HeaderMenu.module.scss'
import Link from 'next/link'
import Logo from '@/components/Logo/Logo'
import Contacts from '../Contacts/Contacts'

const navigationItems = [
  {
    title: 'Почему kitby.by?',
    href: '#whyus'
  },
  {
    title: 'Услуги',
    href: '#services'
  },
  {
    title: 'Команда',
    href: '#team'
  },
  {
    title: 'Наши кейсы',
    href: '#cases'
  },
  {
    title: 'Отзывы',
    href: '#reviews'
  }
]

const HeaderMenu = ({ closeMenu }) => {
  const onNavItemClick = () => {
    closeMenu()
  }

  return (
    <div className={st.menu}>
      <div className={st.menuContent}>
        <div className={st.menuHeader}>
          <Logo />
        </div>
        <div className={st.menuNav}>
          {navigationItems.map(({ title, href }) => (
            <Link key={href} href={href} onClick={onNavItemClick} className={st.navLink}>
              {title}
            </Link>
          ))}
        </div>

        <Contacts className={st.contacts} />
      </div>
    </div>
  )
}

export default HeaderMenu
