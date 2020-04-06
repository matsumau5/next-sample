import React, { AnchorHTMLAttributes } from 'react'
// import styled from '@emotion/styled'
import { LinkProps } from 'next/link'
import css from './link.scss'

type Props = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>

const TodoLink: React.FC<Props> = (props: Props) => {
  return <a className={css.todoLink} {...props} />
}

export default TodoLink

// const StyledLink: React.FC<Props> = ({
//   href,
//   as,
//   replace,
//   scroll,
//   shallow,
//   onError,
//   prefetch,
//   ...rest
// }) => {
//   return (
//     <Link
//       href={href}
//       as={as}
//       replace={replace}
//       scroll={scroll}
//       shallow={shallow}
//       prefetch={prefetch}
//       passHref
//     >
//       <StyledText {...rest} />
//     </Link>
//   )
// }

// export default StyledLink
