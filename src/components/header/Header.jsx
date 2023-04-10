import React from 'react';
import { Logo } from '../common';
import s from './Header.module.scss';

export const Header = () => {
  return (
    <div className={s.header}>
      <Logo />
      <div className={s.links}>
        <a className={s.link} href='/'>Product</a>
        <a className={s.link} href='/'>Services</a>
        <a className={s.link} href='/'>About</a>
        <a className={s.link} href='/'>Log In</a>
      </div>
    </div>
  )
}
