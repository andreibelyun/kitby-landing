import st from './Advertising.module.scss'
import ButtonsGroup from '@/components/ButtonsGroup/ButtonsGroup'

const Advertising = () => {
  return (
    <section className={st.container}>
      <div className={st.content}>
        <h2 className={st.title}>Подберем, купим и&nbsp;доставим в Беларусь любые товары из Китая</h2>
        <p className={st.caption}>Сопровождаем на всех этапах поставки Берем всю «головную боль» на себя!</p>
        <ButtonsGroup className={st.btns}/>
      </div>
    </section>
  )
}

export default Advertising
