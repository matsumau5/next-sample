import React from 'react'
import css from './header.scss'
import logo from '../../../images/nextjs.svg'

const Header: React.FC = () => {
  return (
    <div className={css.header}>
      <img src={logo} className={css.logo} alt="logo" />
    </div>
  )
}

export default Header
