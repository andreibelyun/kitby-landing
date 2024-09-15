import st from './Reviews.module.scss'
import Image from 'next/image'
import { REVIEWS } from './reviewsList'

const Reviews = () => {
  return (
    <div className={st.container}>
      <h2 className={st.title}>Отзывы</h2>
      <div className={st.reviews}>
        {REVIEWS.map(item => (
          <ReviewCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Reviews

const ReviewCard = ({ photo, author, text, date }) => (
  <article className={st.review}>
    <div className={st.reviewPhoto}>
      <Image src={photo} fill alt='Фотография отзыва' />
    </div>
    <div>
      <h6 className={st.reviewAuthorName}>{author.name}</h6>
      <p className={st.reviewAuthorJob}>{author.job}</p>
      <div className={st.reviewText}>{text}</div>
      <p className={st.reviewDate}>{date}</p>
    </div>
  </article>
)
