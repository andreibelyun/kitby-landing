'use client'

import st from './Modal.module.scss'
import { useEffect, useRef } from 'react'
import { useModal } from '@/context/useModal'
import { disableScroll, enableScroll } from '@/utils/scroll'
import { useKeyboardEvent } from '@/hooks/useKeyboardEvent'
import LeaveSimpleRequest from './LeaveSimpleRequest/LeaveSimpleRequest'
import LeaveFreeEstimateRequest from './LeaveFreeEstimateRequest/LeaveFreeEstimateRequest'

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
    freeEstimateRequest: <LeaveFreeEstimateRequest closeModal={onModalClose} />
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

        <button onClick={onModalClose} className={st.xBtn} aria-label='Закрыть окно'>
          <svg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M20.2446 20.5022L59.5062 59.7638' stroke='#466881' strokeWidth='2' strokeLinecap='round' />
            <path d='M59.5063 20.5022L20.2447 59.7638' stroke='#466881' strokeWidth='2' strokeLinecap='round' />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Modal
