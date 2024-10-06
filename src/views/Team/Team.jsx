import st from './Team.module.scss'
import Image from 'next/image'
import { EMPLOYEES } from './employeesList'
import { useModal } from '@/context/useModal'
import Button from '@/components/Button/Button'
import { getClearPhoneNum } from '@/utils/phone'
import Carousel from '@/components/Carousel/Carousel'
import { IconInstagram, IconMain, IconPhone, IconTelegram } from './assets/icons'

const PHONE = '+375 29 318-82-12'

const Team = () => {
  const { openModal } = useModal()

  const onLeaveSimpleReqBtnClick = () => {
    openModal('simpleRequest')
  }

  return (
    <section id='team' className={st.container}>
      <h2 className={st.title}>Команда</h2>

      <div className={st.content}>
        <div className={st.leftInfo}>
          <p>
            Наши менеджеры,
            <br />
            решающие любые задачи
          </p>
          <a href={`tel:${getClearPhoneNum(PHONE)}`} className={st.leftInfoPhone}>
            {PHONE}
          </a>
          <p>Понедельник - пятница</p>
          <p className={st.workingHours}>с 08:00 до 22:00</p>

          <Button variant='secondary' onClick={onLeaveSimpleReqBtnClick}>
            Оставить заявку
          </Button>
        </div>

        <div className={st.employeesList}>
          {EMPLOYEES.map(item => (
            <EmployeeCard key={item.name} {...item} />
          ))}
        </div>
      </div>

      <Carousel
        loop
        isDark
        withAutoplay
        withPagination
        id='services-slider'
        className={st.swiper}
        navBtnClassName={st.navBtn}
        breakpoints={{ 320: { slidesPerView: 1 } }}
        slides={EMPLOYEES.map(item => (
          <EmployeeCard key={item.name} {...item} />
        ))}
      />
    </section>
  )
}

export default Team

const EmployeeCard = ({ photo, name, position, phone, email, telegram, instagram }) => (
  <div className={st.employeeCard}>
    <div className={st.employeePhoto}>
      <Image src={photo} fill alt={`Фотография ${name}`} />
    </div>

    <h6 className={st.employeeName}>{name}</h6>
    <p className={st.employeePosition}>{position}</p>

    {phone && (
      <a href={`tel:${getClearPhoneNum(phone)}`} className={st.employeeContactLink}>
        <IconPhone />
        {phone}
      </a>
    )}
    {email && (
      <a href={`mailto:${email}`} className={st.employeeContactLink}>
        <IconMain />
        {email}
      </a>
    )}
    {telegram && (
      <a href={`https://${telegram}`} className={st.employeeContactLink} target='_blank' rel='noopener'>
        <IconTelegram />
        {telegram}
      </a>
    )}
    {instagram && (
      <a href={`https://${instagram}`} className={st.employeeContactLink} target='_blank' rel='noopener'>
        <IconInstagram />
        {instagram}
      </a>
    )}
  </div>
)
