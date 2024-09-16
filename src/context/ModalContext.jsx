'use client'

import { createContext, useState } from 'react'
import Modal from '@/components/Modal/Modal'

export const ModalContext = createContext()

const DEFAULT_TYPE = 'simpleRequest'

export const ModalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [type, setType] = useState(DEFAULT_TYPE)
  const [data, setData] = useState({})

  const toggleModal = () => {
    setIsOpen(prev => !prev)
  }

  const openModal = (type = DEFAULT_TYPE, data = {}) => {
    setData(data)
    setType(type)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setType(DEFAULT_TYPE)
    setData({})
  }

  const contextValue = {
    isOpen,
    type,
    data,
    toggleModal,
    openModal,
    closeModal
  }

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      <Modal />
    </ModalContext.Provider>
  )
}
