import st from './SuccessInformer.module.scss'
import Button from '@/components/Button/Button'

const SuccessInformer = ({ closeModal }) => {
  return (
    <div className={st.successInformer}>
      <h3 className={st.title}>Ваша заявка отправлена!</h3>
      <p className={st.successText}>Мы свяжемся с вами в самое ближайшее время</p>
      <Button size='large' onClick={closeModal} className={st.successBtn}>
        {'Спасибо! Жду :)'}
      </Button>
    </div>
  )
}

export default SuccessInformer
