import st from './Input.module.scss'
import { forwardRef } from 'react'
import clsx from 'clsx'

const Input = forwardRef((props, ref) => {
  const { type = 'input', id = '1', isError = false, small = false, className, labelText, ...restProps } = props

  return (
    <label htmlFor={id} className={clsx(st.inputContainer, className)}>
      {labelText}
      <Component
        {...restProps}
        id={id}
        ref={ref}
        type={type}
        autoComplete='off'
        className={clsx(st.input, { [st.error]: isError, [st.small]: small })}
      />
    </label>
  )
})

const Component = forwardRef(({ type, ...props }, ref) =>
  type === 'textarea' ? <textarea ref={ref} {...props} /> : <input ref={ref} {...props} />
)

Component.displayName = 'Component'
Input.displayName = 'Input'

export default Input
