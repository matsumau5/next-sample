import React, { ButtonHTMLAttributes } from 'react'
import styles from './button.scss'

type ButtonType = null | 'danger'

type OwnProps = {
  type?: ButtonType
}

type WrapperProps = {
  buttonType?: ButtonType
}

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & OwnProps

const TodoButton: React.FC<WrapperProps> = (props: WrapperProps) => {
  return <button className={styles.todoButton} {...props} />
}

// const StyledButton = styled('button')<WrapperProps>`
// const StyledButton = styled(TodoButton)<WrapperProps>`
//   appearance: none;
//   border: 1px solid #89d2dd;
//   background: #f4fbfc;
//   color: #00a6bc;
//   border-radius: 5px;
//   transition: all linear 0.2s;
//   cursor: pointer;
//   font-size: 1.06rem;
//   padding: 0.8rem;

//   :hover {
//     background: #00a6bc;
//     color: #f4fbfc;
//   }

//   :focus {
//     outline: none;
//   }

//   :disabled {
//     border-color: #b3b3b3;
//     background: #f7f7f7;
//     color: #b3b3b3;
//   }

//   ${({ buttonType }) =>
//     buttonType === 'danger' &&
//     css`
//       color: #bc0000;
//       border-color: #dd8989;
//       background: #fcf4f4;

//       :hover {
//         background: #bc0000;
//         color: #fcf4f4;
//       }
//     `}
// `
// const StyledButton = (props: WrapperProps) => {
//   `${({ buttonType }) =>
//   buttonType === 'danger' &&
//   css`
//     color: #bc0000;
//     border-color: #dd8989;
//     background: #fcf4f4;

//     :hover {
//       background: #bc0000;
//       color: #fcf4f4;
//     }
//   `
//   return <button className="todo-button" value="" {...props} />
// }

const Button: React.FC<Props> = ({ type, ...rest }) => {
  return <TodoButton {...rest} buttonType={type} />
}

export default Button
