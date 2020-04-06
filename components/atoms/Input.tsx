/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import css from './input.scss'

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={css.todoInput} {...props} />
}

export default Input
