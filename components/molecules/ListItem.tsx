/* eslint-disable react/jsx-no-undef */
import React, { HTMLAttributes } from 'react'
// import styled from '@emotion/styled'
// import List from '../atoms/List'
import css from './listitem.scss'
import Item from '../atoms/List/Item'

type Props = Omit<HTMLAttributes<HTMLDListElement>, 'type'> & {
  title?: string
  action?: React.ReactNode
}

const TodoItem: React.FC<Props> = (props: Props) => {
  return <Item {...props} />
}

const ListItem: React.FC<Props> = ({ title, action, ...rest }) => {
  return (
    <TodoItem {...rest}>
      <div className={css.content}>{title}</div>
      {action && <div>{action}</div>}
    </TodoItem>
  )
}

export default ListItem
