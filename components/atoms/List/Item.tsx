import React from 'react'
import css from './item.scss'

const Item: React.FC = (props) => {
  return <li className={css.todoItem} {...props} />
}

export default Item
