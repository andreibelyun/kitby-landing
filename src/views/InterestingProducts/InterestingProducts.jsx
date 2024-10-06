import st from './InterestingProducts.module.scss'
import clsx from 'clsx'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { PRODUCTS } from './productsList'
import ButtonsGroup from '@/components/ButtonsGroup/ButtonsGroup'
import Partners from '../Partners/Partners'
import Reviews from '../Reviews/Reviews'
import Button from '@/components/Button/Button'

const InterestingProducts = () => {
  const [showAll, setShowAll] = useState(false)

  return (
    <section id='cases' className={st.container}>
      <h2 className={st.title}>Подборка интересных&nbsp;товаров, приобретенных нашими клиентами</h2>

      <div className={st.products}>
        {PRODUCTS.map(item => (
          <ProductCard key={item.id} {...item} className={clsx({ [st.hiddenCard]: item.isMobHidden && !showAll })} />
        ))}
      </div>

      {!showAll && (
        <Button onClick={() => setShowAll(true)} variant='outlined' className={st.showAllBtn}>
          Показать еще
        </Button>
      )}

      <ButtonsGroup className={st.btns} withoutLeaveFreeEstimateReqBtn />

      <Partners />
      <Reviews />
    </section>
  )
}

export default InterestingProducts

const ProductCard = ({ id, photo, name, description, className }) => {
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
    <article className={clsx(st.productCard, className)}>
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
