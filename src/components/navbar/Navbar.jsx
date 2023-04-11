import React from 'react';
import { Logo, Button } from '../common';
import s from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <div className={s.navbar}>
      <Logo />
      <div className={s.links}>
        <a className={s.link} href='/'>Product</a>
        <a className={s.link} href='/'>Services</a>
        <a className={s.link} href='/'>About</a>
        <Button color="ghost" size="sm" text="Log in" />
      </div>
    </div>
  )
}
