import st from './LeaveFreeEstimateRequest.module.scss'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import RadioGroup from '@/components/RadioGroup/RadioGroup'
import { DropZone } from '@/components/DropZone/DropZone'

const DEFAULT_ENTITY = 'legal' // or 'individual'
const REQUIRED_ERR_TEXT = 'Некоторые обязательные поля не заполнены'
const REQUIRED_RULE = { required: { value: true, message: REQUIRED_ERR_TEXT } }
const CORRECT_PHONE_RULE = {
  pattern: {
    value: /^(?:\+)?\s?\(?\d{3}\)?[-.\s]?\d{2}[-.\s]?\d{7}$/,
    message: 'Некорректный номер телефона'
  }
}

const LeaveFreeEstimateRequest = ({ closeModal }) => {
  const [isRequestSent, setIsRequestSent] = useState(false)
  const [entityType, setEntityType] = useState(DEFAULT_ENTITY)
  const [files, setFiles] = useState(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const isButtonDisabled = Object.keys(errors).length > 0

  const resetForm = () => {
    setEntityType(DEFAULT_ENTITY)
    setFiles(null)
    reset()
  }

  const onFormSubmit = data => {
    resetForm()
    alert(getReadableInfo({ ...data, entityType, files }))
    setIsRequestSent(true)
  }

  useEffect(() => {
    console.log(files)
  }, [files])

  if (isRequestSent)
    return (
      <div className={st.successInformer}>
        <h3 className={st.title}>Ваша заявка отправлена!</h3>
        <p className={st.successText}>Мы свяжемся с вами в самое ближайшее время</p>
        <Button size='large' onClick={closeModal} className={st.successBtn}>
          {'Спасибо! Жду :)'}
        </Button>
      </div>
    )

  return (
    <div className={st.container}>
      <h3 className={st.title}>Оставить заявку на бесплатный расчет</h3>

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
            small
            id='last-name'
            labelText='Фамилия'
            placeholder='Ваша фамилия'
            isError={errors.lastName}
            {...register('lastName', { ...REQUIRED_RULE })}
          />

          <Input
            small
            id='first-name'
            labelText='Имя'
            placeholder='Ваше имя'
            isError={errors.firstName}
            {...register('firstName', { ...REQUIRED_RULE })}
          />

          <Input
            small
            id='company-name'
            labelText='Название компании'
            placeholder='Название компании'
            isError={errors.companyName}
            {...register('companyName', { ...REQUIRED_RULE })}
          />

          <Input
            small
            id='phone-number'
            labelText='Номер телефона'
            placeholder='+ 375 (__) ___-__-__'
            isError={errors.phone}
            {...register('phone', { ...REQUIRED_RULE, ...CORRECT_PHONE_RULE })}
          />

          <Input
            small
            rows={3}
            placeholder='Укажите, пожалуйста, важные характеристики и параметры (количество, желаемая цена, дополнительная информация)'
            type='textarea'
            id='product-info'
            className={st.textArea}
            isError={errors.productInfo}
            labelText='Описание интересующего вас товара (ссылка на товар)'
            {...register('productInfo')}
          />

          <Input
            small
            id='count'
            labelText='Количество (шт.)'
            placeholder='Количество'
            isError={errors.count}
            {...register('count', { ...REQUIRED_RULE, valueAsNumber: true })}
          />

          <Input
            small
            id='price'
            labelText='Желаемая цена (в USD)'
            placeholder='от _  до ___ $'
            isError={errors.price}
            {...register('price', { ...REQUIRED_RULE })}
          />

          <DropZone className={st.dropzone} files={files} setFiles={setFiles} />
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

export default LeaveFreeEstimateRequest

const statusByID = {
  legal: 'юридическое лицо',
  individual: 'физическое лицо'
}

const getReadableInfo = ({ lastName, firstName, companyName, phone, productInfo, entityType, count, price, files }) => {
  return `Новая заявка: 
  статус: "${statusByID[entityType]}", 
  фамилия: "${lastName}", 
  имя: "${firstName}", 
  компания: "${companyName}", 
  телефон: "${phone}", 
  доп. информация: "${!!productInfo ? productInfo : '-'}",
  количество: "${count}", 
  желаемая цена: "${price}", 
  файлы: "${files?.length || 0} шт."`
}
