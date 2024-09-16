import st from './InterestingProducts.module.scss'
import Image from 'next/image'
import { PRODUCTS } from './productsList'
import ButtonsGroup from '@/components/ButtonsGroup/ButtonsGroup'
import Partners from '../Partners/Partners'
import Reviews from '../Reviews/Reviews'

const InterestingProducts = () => {
  return (
    <section className={st.container}>
      <h2 className={st.title}>Подборка интересных товаров, приобретенных нашими клиентами</h2>

      <div className={st.products}>
        {PRODUCTS.map(item => (
          <ProductCard key={item.name} {...item} />
        ))}
      </div>

      <ButtonsGroup className={st.btns} withoutLeaveFreeEstimateReqBtn />

      <Partners />
      <Reviews />
    </section>
  )
}

export default InterestingProducts

const ProductCard = ({ photo, name, description }) => (
  <article className={st.productCard}>
    <div className={st.productPhoto}>
      <Image fill src={photo} alt={`Фотография продукта: ${name}`} />
    </div>

    <div className={st.productText}>
      <h6 className={st.productName}>{name}</h6>
      <p className={st.productInfo}>{description}</p>
      <button className={st.showMore}>Показать</button>
    </div>
  </article>
)
