import st from './Footer.module.scss'
import Logo from '../Logo/Logo'
import IconMail from '@/assets/svg/IconMail'
import IconPhone from '@/assets/svg/IconPhone'
import {
  CONTACT_EMAIL,
  CURRENT_ACCOUNT,
  LEGAL_ADRESS,
  OKPO,
  PHONE_NUMBER,
  POSTAL_ADDRESS,
  READABLE_PHONE_NUMBER,
  UNP
} from '@/constants/contacts'

const SOCIAL_LINKS = [
  { icon: '1', href: '/1' },
  { icon: '2', href: '/2' },
  { icon: '3', href: '/3' }
]

const Footer = () => {
  return (
    <footer className={st.footer}>
      <Logo />

      <div className={st.content}>
        <div className={st.leftInfo}>
          <h4 className={st.slogan}>
            <span className={st.companyName}>Kitby.by</span>
            &nbsp;- надежный партнёр&nbsp;
            <br />в поставках из Китая
          </h4>

          <p className={st.socialLinksTitle}>Мы в соцсетях</p>
          <div className={st.socialLinks}>
            {SOCIAL_LINKS.map(({ href, icon }) => (
              <a key={href} href={href} className={st.socialLink}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className={st.legalInfo}>
          <h6 className={st.legalInfoTitle}>Юридический адрес:</h6>
          <p className={st.legalInfoText}>{LEGAL_ADRESS}</p>

          <h6 className={st.legalInfoTitle}>Почтовый адрес:</h6>
          <p className={st.legalInfoText}>{POSTAL_ADDRESS}</p>

          <h6 className={st.legalInfoTitle}>Расчетный счёт:</h6>
          <p className={st.legalInfoText}>{CURRENT_ACCOUNT}</p>

          <p className={st.legalInfoText}>
            <span className={st.legalInfoTitle}>УНП&nbsp;</span>
            {UNP}
          </p>

          <p className={st.legalInfoText}>
            <span className={st.legalInfoTitle}>ОКПО&nbsp;</span>
            {OKPO}
          </p>
        </div>

        <div className={st.contacts}>
          <a href={`mailto:${CONTACT_EMAIL}`} className={st.email}>
            <IconMail />
            <span>{CONTACT_EMAIL}</span>
          </a>

          <a href={`tel:${PHONE_NUMBER}`} className={st.phone}>
            <IconPhone />
            {READABLE_PHONE_NUMBER}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
