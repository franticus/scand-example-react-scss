import React from 'react';
import cn from 'classnames';
import { Logo } from '../common';
import s from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <div className={s.navbar}>
      <Logo />
      <div className={s.links}>
        <a className={s.link} href='/'>Product</a>
        <a className={s.link} href='/'>Services</a>
        <a className={s.link} href='/'>About</a>
        <a className={cn(s.link, s.link__selected)} href='/'>Log In</a>
      </div>
    </div>
  )
}
