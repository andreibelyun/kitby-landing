import st from './Services.module.scss'
import clsx from 'clsx'
import Carousel from '@/components/Carousel/Carousel'
import { SERVICES_LIST } from './servicesList'
import ButtonsGroup from '@/components/ButtonsGroup/ButtonsGroup'

const ADDITIONAL = [
  'Проверка качества товара в Китае.',
  'Услуги по упаковке и маркировке.',
  'Организация поездок в Китай 🇨🇳',
  'Изготовление товара по индивидуальному заказу клиента.'
]

const Services = () => {
  return (
    <section className={st.container}>
      <h2 className={st.title}>Услуги</h2>

      <Carousel
        withAutoplay={false}
        withPagination
        id='services-slider'
        slides={SERVICES_LIST.map(info => (
          <ServiceSlide key={info.text} {...info} />
        ))}
      />

      <div className={st.additional}>
        <h4 className={st.additionalTitle}>А еще мы предлагаем:</h4>
        <ul className={st.additionalList}>
          {ADDITIONAL.map((item, i) => (
            <li key={item} className={st.additionalItem}>
              <span className={st.additionalItemNum}>{i + 1}</span>
              <p className={st.additionalItemText}>{item}</p>
            </li>
          ))}
        </ul>
      </div>

      <ButtonsGroup className={st.btns} />
    </section>
  )
}

export default Services

const ServiceSlide = ({ bgImg, text, textSize = 'S' }) => (
  <div className={st.slide} style={{ backgroundImage: `url(${bgImg.src}) !important` }}>
    <div className={st.slideInner}>
      <p
        className={clsx(st.slideText, {
          [st.slideTextS]: textSize === 'M',
          [st.slideTextM]: textSize === 'M',
          [st.slideTextL]: textSize === 'L'
        })}
      >
        {text}
      </p>
    </div>
  </div>
)
