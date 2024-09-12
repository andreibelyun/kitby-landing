import st from './Button.module.scss'
import clsx from 'clsx'

const Button = ({ variant = 'primary', size = 'base', children, className, ...props }) => {
  return (
    <button className={clsx(st.btn, st[variant], st[size], className)} {...props}>
      {children}
    </button>
  )
}

export default Button
