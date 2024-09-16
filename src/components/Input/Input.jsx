import st from './Input.module.scss'
import clsx from 'clsx'

const Component = ({ type, ...props }) => (type === 'textarea' ? <textarea {...props} /> : <input {...props} />)

const Input = ({ type = 'input', id = '1', isError = false, className, labelText, ...props }) => {
  return (
    <label htmlFor={id} className={clsx(st.inputContainer, className)}>
      {labelText}
      <Component
        {...props}
        id={id}
        type={type}
        autoComplete='off'
        className={clsx(st.input, { [st.error]: isError })}
      />
    </label>
  )
}

export default Input
