import st from './StillHaveQuestions.module.scss'
import Input from '@/components/Input/Input'
import Button from '@/components/Button/Button'

const PLACEHOLDER = '+ 375 (__) ___-__-__'

const StillHaveQuestions = () => {
  const onFormSubmit = e => {
    e.preventDefault()
  }

  return (
    <section className={st.container}>
      <div className={st.content}>
        <h2 className={st.title}>
          Остались вопросы?
          <br />С удовольствием ответим&nbsp;на&nbsp;них
        </h2>

        <form className={st.contactForm} onSubmit={onFormSubmit}>
          <Input className={st.input} placeholder={PLACEHOLDER} />
          <Button type='submit' className={st.btn}>
            Перезвоните мне
          </Button>
        </form>
      </div>
    </section>
  )
}

export default StillHaveQuestions
