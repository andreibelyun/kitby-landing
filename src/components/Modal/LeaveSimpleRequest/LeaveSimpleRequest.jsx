import st from './LeaveSimpleRequest.module.scss'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import RadioGroup from '@/components/RadioGroup/RadioGroup'
import SuccessInformer from '../SuccessInformer/SuccessInformer'

const DEFAULT_ENTITY = 'legal' // or 'individual'
const REQUIRED_ERR_TEXT = 'Некоторые обязательные поля не заполнены'
const REQUIRED_RULE = { required: { value: true, message: REQUIRED_ERR_TEXT } }
const CORRECT_PHONE_RULE = {
  pattern: {
    value: /^(?:\+)?\s?\(?\d{3}\)?[-.\s]?\d{2}[-.\s]?\d{7}$/,
    message: 'Некорректный номер телефона'
  }
}

const LeaveSimpleRequest = ({ closeModal }) => {
  const [isRequestSent, setIsRequestSent] = useState(false)
  const [entityType, setEntityType] = useState(DEFAULT_ENTITY)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const isButtonDisabled = Object.keys(errors).length > 0

  const resetForm = () => {
    setEntityType(DEFAULT_ENTITY)
    reset()
  }

  const onFormSubmit = data => {
    resetForm()
    alert(getReadableInfo({ ...data, entityType }))
    setIsRequestSent(true)
  }

  if (isRequestSent) return <SuccessInformer closeModal={closeModal} />

  return (
    <div className={st.container}>
      <h3 className={st.title}>Оставить заявку</h3>

      <form className={st.form} onSubmit={handleSubmit(onFormSubmit)}>
        <RadioGroup
          name='entity-type'
          className={st.radio}
          selectedItemID={entityType}
          onItemChange={id => setEntityType(id)}
          items={[
            { id: 'legal', name: 'Юр. лицо' },
            { id: 'individual', name: 'Физ. лицо' }
          ]}
        />

        <div className={st.inputs}>
          <Input
            id='last-name'
            labelText='Фамилия'
            placeholder='Ваша фамилия'
            isError={errors.lastName}
            {...register('lastName', { ...REQUIRED_RULE })}
          />

          <Input
            id='first-name'
            labelText='Имя'
            placeholder='Ваше имя'
            isError={errors.firstName}
            {...register('firstName', { ...REQUIRED_RULE })}
          />

          <Input
            id='company-name'
            labelText='Название компании'
            placeholder='Название компании'
            isError={errors.companyName}
            {...register('companyName', { ...REQUIRED_RULE })}
          />

          <Input
            id='phone-number'
            labelText='Номер телефона'
            placeholder='+ 375 (__) ___-__-__'
            isError={errors.phone}
            {...register('phone', { ...REQUIRED_RULE, ...CORRECT_PHONE_RULE })}
          />

          <Input
            rows={4}
            placeholder=''
            type='textarea'
            id='product-info'
            className={st.textArea}
            isError={errors.productInfo}
            labelText='Товар, который вас интересует'
            {...register('productInfo')}
          />
        </div>

        <p className={st.error}>
          {Object.keys(errors).length > 0 ? `*${Object.values(errors)[0].message}` : <>&nbsp;</>}
        </p>

        <Button size='large' type='submit' disabled={isButtonDisabled} className={st.submitBtn}>
          Отправить
        </Button>
      </form>
    </div>
  )
}

export default LeaveSimpleRequest

const statusByID = {
  legal: 'юридическое лицо',
  individual: 'физическое лицо'
}

const getReadableInfo = ({ lastName, firstName, companyName, phone, productInfo, entityType }) => {
  return `Новая заявка: 
  статус: "${statusByID[entityType]}", 
  фамилия: "${lastName}", 
  имя: "${firstName}", 
  компания: "${companyName}", 
  телефон: "${phone}", 
  доп. информация: "${!!productInfo ? productInfo : '-'}".`
}
