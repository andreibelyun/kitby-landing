import st from './Button.module.scss'

const Button = ({ children, ...props }) => {
  return (
    <button className={st.btn} {...props}>
      {children}
    </button>
  )
}

export default Button
