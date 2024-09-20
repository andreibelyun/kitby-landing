'use client'

import st from './Cover.module.scss'
import IconWhaleTail from '@/assets/svg/IconWhaleTail'
import ButtonsGroup from '@/components/ButtonsGroup/ButtonsGroup'
import ChFlag from '@/components/ChFlag/ChFlag'

const Cover = () => {
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
          <span className={st.titleHighlight}>
            любые товары из Китая&nbsp;
            <ChFlag />
          </span>
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

        <ButtonsGroup />
      </div>
    </section>
  )
}

export default Cover
