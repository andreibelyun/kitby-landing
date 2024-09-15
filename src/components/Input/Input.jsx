import st from './Input.module.scss'
import clsx from 'clsx'

const Input = ({ className, ...props }) => {
  return <input className={clsx(st.input, className)} {...props} />
}

export default Input
