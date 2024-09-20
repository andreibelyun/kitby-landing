import Logo from '@/components/Logo/Logo'
import st from './HeaderMenu.module.scss'
import Link from 'next/link'
import Contacts from '../Contacts/Contacts'

const navigationItems = [
  {
    title: 'О нас',
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
    title: 'Отзывы',
    href: '#reviews'
  }
]

const HeaderMenu = () => {
  return (
    <div className={st.menu}>
      <div className={st.menuContent}>
        <div className={st.menuHeader}>
          <Logo />
        </div>
        <div className={st.menuNav}>
          {navigationItems.map(({ title, href }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)} className={st.navLink}>
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
