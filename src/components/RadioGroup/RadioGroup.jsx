import st from './RadioGroup.module.scss'
import clsx from 'clsx'

const RadioGroup = ({ groupName, items, selectedItemID, onItemChange, className }) => {
  return (
    <ul className={clsx(st.radioList, className)}>
      {items?.map(({ id, name }) => (
        <li key={id} className={st.radio} onClick={() => onItemChange(id)}>
          <div>
            <input
              id={id}
              type='radio'
              name={groupName}
              onChange={onItemChange}
              className={st.radioInput}
              checked={id === selectedItemID}
            />
            <label htmlFor={id} />
          </div>
          <p className={st.radioTitle}>{name}</p>
        </li>
      ))}
    </ul>
  )
}

export default RadioGroup
