import st from './ButtonsGroup.module.scss'
import clsx from 'clsx'
import Button from '../Button/Button'
import { useModal } from '@/context/useModal'

const ButtonsGroup = ({
  withoutLeaveSimpleReqBtn = false,
  withoutLeaveFreeEstimateReqBtn = false,
  className,
  ...props
}) => {
  const { openModal } = useModal()

  return (
    <div className={clsx(st.buttons, className)} {...props}>
      {!withoutLeaveSimpleReqBtn && (
        <Button onClick={openModal} className={st.btn}>
          Оставить заявку
        </Button>
      )}
      {!withoutLeaveFreeEstimateReqBtn && (
        <Button variant='outlined' onClick={openModal} className={st.btn}>
          Бесплатный просчет
        </Button>
      )}
    </div>
  )
}

export default ButtonsGroup
