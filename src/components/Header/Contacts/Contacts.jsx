import st from './Contacts.module.scss'
import clsx from 'clsx'
import IconMail from '@/assets/svg/IconMail'
import IconPhone from '@/assets/svg/IconPhone'
import { CONTACT_EMAIL, PHONE_NUMBER, READABLE_PHONE_NUMBER } from '@/constants/contacts'

const Contacts = ({ withoutMailIcon = false, withoutPhoneIcon = false, className }) => (
  <div className={clsx(st.contacts, className)}>
    <a href={`mailto:${CONTACT_EMAIL}`} className={st.email}>
      {!withoutMailIcon && <IconMail />}
      <span>{CONTACT_EMAIL}</span>
    </a>

    <a href={`tel:${PHONE_NUMBER}`} className={st.phone}>
      {!withoutPhoneIcon && <IconPhone />}
      {READABLE_PHONE_NUMBER}
    </a>
  </div>
)

export default Contacts
