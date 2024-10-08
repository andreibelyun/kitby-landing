import st from './StillHaveQuestions.module.scss'
import Input from '@/components/Input/Input'
import Button from '@/components/Button/Button'
import { useForm } from 'react-hook-form'
import { useModal } from '@/context/useModal'

const PLACEHOLDER = '+ 375 (__) ___-__-__'
const REQUIRED_ERR_TEXT = 'Поле не заполнено'
const REQUIRED_RULE = { required: { value: true, message: REQUIRED_ERR_TEXT } }
const CORRECT_PHONE_RULE = {
  pattern: {
    value: /^(?:\+)?\s?\(?\d{3}\)?[-.\s]?\d{2}[-.\s]?\d{7}$/,
    message: 'Некорректный номер телефона'
  }
}

const StillHaveQuestions = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const { openModal } = useModal()

  const isButtonDisabled = Object.keys(errors).length > 0

  const onFormSubmit = data => {
    reset()
    alert(JSON.stringify(data))
    openModal('successRequest')
  }

  return (
    <section className={st.container}>
      <div className={st.content}>
        <h2 className={st.title}>
          Остались вопросы?
          <br />С удовольствием ответим&nbsp;на&nbsp;них
        </h2>

        <form className={st.contactForm} onSubmit={handleSubmit(onFormSubmit)}>
          <div>
            <Input
              className={st.input}
              placeholder={PLACEHOLDER}
              isError={errors.phoneNumber}
              {...register('phoneNumber', { ...REQUIRED_RULE, ...CORRECT_PHONE_RULE })}
            />
            <p className={st.error}>
              {Object.keys(errors).length > 0 ? `* ${Object.values(errors)[0].message}` : <>&nbsp;</>}
            </p>
          </div>
          <Button type='submit' className={st.btn} disabled={isButtonDisabled}>
            Перезвоните мне
          </Button>
        </form>
      </div>
    </section>
  )
}

export default StillHaveQuestions
