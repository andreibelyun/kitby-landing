'use client'

import st from './Cover.module.scss'
import Button from '@/components/Button/Button'
import { useModal } from '@/context/useModal'
import IconWhaleTail from '@/assets/svg/IconWhaleTail'

const Cover = () => {
  const { openModal } = useModal()

  return (
    <section className={st.container}>
      <div className={st.decoration} />
      <div className={st.content}>
        <h1 className={st.title}>
          Найдем, купим,
          <br />
          доставим, растаможим,
          <br />
          сертифицируем в Беларусь,
          <br />
          Россию и страны Европы&nbsp;
          <br />
          <span className={st.titleHighlight}>любые товары из Китая 🇨🇳</span>
        </h1>

        <p className={st.caption}>Ваша идея – наша реализация!</p>

        <ul className={st.benefitsList}>
          <li className={st.benefit}>
            <span>
              <IconWhaleTail />
            </span>
            Найдем поставщиков с лучшими условиями.
          </li>
          <li className={st.benefit}>
            <span>
              <IconWhaleTail />
            </span>
            Контроль и сопровождение на всех стадиях сделки.
          </li>
        </ul>

        <div className={st.buttons}>
          <Button onClick={openModal} className={st.btn}>
            Оставить заявку
          </Button>
          <Button variant='outlined' onClick={openModal} className={st.btn}>
            Бесплатный просчет
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Cover
