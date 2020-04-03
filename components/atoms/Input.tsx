/* eslint-disable @typescript-eslint/explicit-function-return-type */
// import styled from '@emotion/styled'
import './input.scss'

import React from 'react'
// import { NextComponentType } from 'next'

// props: JSX.IntrinsicAttributes &//   React.ClassAttributes<HTMLInputElement> &//   React.InputHTMLAttributes<HTMLInputElement>
// props: React.FC<number>
const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input className="todo-input" value="" {...props} />
}

export default Input

// const Input = styled.input`
//   appearance: none;
//   border-radius: 4px;
//   transition: all linear 0.2s;
//   background: #fff;
//   border: 1px solid #d4dadc;
//   padding: 4px 6px;

//   :hover {
//     border: 1px solid #89d2dd;
//     background: #f4fbfc;
//   }

//   :focus {
//     outline: none;
//   }
// `
// export default Input
