'use client'

import { useContext } from 'react'
import { ModalContext } from './ModalContext'

export const useModal = () => {
  const { isOpen, type, data, toggleModal, openModal, closeModal } = useContext(ModalContext)

  return { isOpen, type, data, toggleModal, openModal, closeModal }
}
