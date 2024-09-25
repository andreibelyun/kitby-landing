'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import st from './Carousel.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import IconArrowLeft from '@/assets/svg/IconArrowLeft'
import IconArrowRight from '@/assets/svg/IconArrowRight'
import clsx from 'clsx'

const DEFAULT_BREAKPOINTS = {
  1400: {
    spaceBetween: 46,
    slidesPerView: 3.7
  },

  1200: {
    spaceBetween: 20,
    slidesPerView: 3
  },

  600: {
    spaceBetween: 25,
    slidesPerView: 2
  },

  500: {
    spaceBetween: 0,
    slidesPerView: 1
  }
}

const PAGINATION = {
  clickable: true
}

const Carousel = ({
  id,
  isDark = false,
  withSideFilter = false,
  loop = false,
  breakpoints = DEFAULT_BREAKPOINTS,
  withNavigation = true,
  withPagination = false,
  withAutoplay = true,
  slides,
  className = '',
  ...props
}) => {
  const navigationProps = {
    prevEl: `#${id}-prev`,
    nextEl: `#${id}-next`
  }

  return (
    <div className={clsx(`${st.container} ${className}`, { dark: isDark, [st.withSideFilter]: withSideFilter })}>
      <Swiper
        loop={loop}
        breakpoints={breakpoints}
        modules={[Navigation, Autoplay, Pagination]}
        autoplay={withAutoplay ? { delay: 3000 } : false}
        pagination={withPagination ? PAGINATION : false}
        navigation={withNavigation ? navigationProps : false}
        style={{ paddingBottom: withPagination ? '45px' : '0' }}
        {...props}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={`history-slide-${i}`}>{slide}</SwiperSlide>
        ))}
      </Swiper>

      {withNavigation && (
        <div className={st.nav}>
          <NavigationBtn id={`${id}-prev`} to='prev' isDark={isDark} />
          <NavigationBtn id={`${id}-next`} to='next' isDark={isDark} />
        </div>
      )}
    </div>
  )
}

export default Carousel

const NavigationBtn = ({ id, to, isDark, ...props }) => {
  const cn = `${to === 'prev' ? st.prevBtn : st.nextBtn} ${isDark ? st.dark : st.light}`

  return (
    <div className={cn}>
      <button
        {...props}
        id={id}
        type='button'
        className={st.navBtn}
        aria-label={to === 'prev' ? 'Предыдущий слайд' : 'Следующий слайд'}
      >
        {to === 'prev' ? <IconArrowLeft /> : <IconArrowRight />}
      </button>
    </div>
  )
}
