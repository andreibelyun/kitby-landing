import st from './Services.module.scss'
import clsx from 'clsx'
import { SERVICES_LIST } from './servicesList'
import ChFlag from '@/components/ChFlag/ChFlag'
import Carousel from '@/components/Carousel/Carousel'
import ButtonsGroup from '@/components/ButtonsGroup/ButtonsGroup'

const ADDITIONAL = [
  'Проверка качества товара в Китае.',
  'Услуги по упаковке и маркировке.',
  <>
    Организация поездок в Китай &nbsp;
    <ChFlag />
  </>,
  'Изготовление товара по индивидуальному заказу клиента.'
]

const BREAKPOINTS = {
  1360: {
    spaceBetween: 35,
    slidesPerView: 3.7
  },

  1260: {
    spaceBetween: 15,
    slidesPerView: 3.4
  },

  1060: {
    spaceBetween: 15,
    slidesPerView: 2.8
  },

  960: {
    spaceBetween: 15,
    slidesPerView: 2.4
  },

  840: {
    slidesPerView: 2,
    spaceBetween: 10
  },
  500: {
    slidesPerView: 1
  }
}

const Services = () => {
  return (
    <section className={st.container}>
      <h2 className={st.title}>Услуги</h2>

      <Carousel
        loop
        withAutoplay
        withPagination
        withSideFilter
        id='services-slider'
        breakpoints={BREAKPOINTS}
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
          [st.slideTextS]: textSize === 'S',
          [st.slideTextM]: textSize === 'M',
          [st.slideTextL]: textSize === 'L'
        })}
      >
        {text}
      </p>
    </div>
  </div>
)
