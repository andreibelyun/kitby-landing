import st from './InterestingProducts.module.scss'
import Image from 'next/image'
import { PRODUCTS } from './productsList'
import ButtonsGroup from '@/components/ButtonsGroup/ButtonsGroup'
import Partners from '../Partners/Partners'
import Reviews from '../Reviews/Reviews'
import { useEffect, useRef } from 'react'

const InterestingProducts = () => {
  return (
    <section className={st.container}>
      <h2 className={st.title}>Подборка интересных товаров, приобретенных нашими клиентами</h2>

      <div className={st.products}>
        {PRODUCTS.map(item => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>

      <ButtonsGroup className={st.btns} withoutLeaveFreeEstimateReqBtn />

      <Partners />
      <Reviews />
    </section>
  )
}

export default InterestingProducts

const ProductCard = ({ id, photo, name, description }) => {
  const productInfoRef = useRef(null)

  useEffect(() => {
    if (productInfoRef.current) {
      const callback = entries => {
        for (let entry of entries) {
          entry.target.classList[entry.target.scrollHeight > entry.contentRect.height ? 'add' : 'remove'](st.truncated)
        }
      }

      const observer = new ResizeObserver(callback)

      observer.observe(productInfoRef.current)

      return () => {
        observer.disconnect()
      }
    }
  }, [])

  return (
    <article className={st.productCard}>
      <div className={st.productPhoto}>
        <Image fill src={photo} alt={`Фотография продукта: ${name}`} />
      </div>

      <div className={st.productText}>
        <h6 className={st.productName}>{name}</h6>
        <input type='checkbox' id={`${id}-expanded`} />
        <p ref={productInfoRef} className={st.productInfo}>
          {description}
        </p>
        <label htmlFor={`${id}-expanded`} role='button' className={st.readMore}>
          Показать
        </label>
      </div>
    </article>
  )
}
