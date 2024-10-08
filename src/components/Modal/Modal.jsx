'use client'

import st from './Modal.module.scss'
import { useEffect, useRef } from 'react'
import { useModal } from '@/context/useModal'
import { disableScroll, enableScroll } from '@/utils/scroll'
import { useKeyboardEvent } from '@/hooks/useKeyboardEvent'
import LeaveSimpleRequest from './LeaveSimpleRequest/LeaveSimpleRequest'
import LeaveFreeEstimateRequest from './LeaveFreeEstimateRequest/LeaveFreeEstimateRequest'
import Logo from '../Logo/Logo'
import IconX from '@/assets/svg/IconX'
import SuccessInformer from './SuccessInformer/SuccessInformer'

const Modal = () => {
  const modalRef = useRef(null)

  const { isOpen, type, closeModal } = useModal()

  const startClosingAnimation = () => {
    modalRef.current.className = modalRef.current.className + ' ' + st.hiddenOverlay
    enableScroll('modal')
  }

  const onModalClose = () => {
    if (modalRef.current) {
      startClosingAnimation()
    }
  }

  const onClosingAnimationEnd = e => {
    if (e?.nativeEvent?.animationName === st.hide) {
      closeModal()
    }
  }

  const modalContentByType = {
    simpleRequest: <LeaveSimpleRequest closeModal={onModalClose} />,
    freeEstimateRequest: <LeaveFreeEstimateRequest closeModal={onModalClose} />,
    successRequest: <SuccessInformer closeModal={onModalClose} />
  }

  useKeyboardEvent('Escape', () => {
    onModalClose()
  })

  useEffect(() => {
    if (isOpen) {
      disableScroll()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      id='modal'
      ref={modalRef}
      onAnimationEnd={onClosingAnimationEnd}
      className={`${st.overlay} ${isOpen ? st.visibleOverlay : ''}`}
    >
      <div className={st.container}>
        {modalContentByType[type]}

        <Logo width={100} height={38} className={st.logo} />

        <button onClick={onModalClose} className={st.xBtn} aria-label='Закрыть окно'>
          <IconX />
        </button>
      </div>
    </div>
  )
}

export default Modal
