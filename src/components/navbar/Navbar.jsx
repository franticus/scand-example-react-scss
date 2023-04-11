import React, { useRef, useState } from 'react';
import { Logo, Button } from '../common';
import s from './Navbar.module.scss';
import burgerIcon from './img/burger.svg'

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const burger = useRef();
  const menu = useRef();

  const menuOpenHandler = () => {
    setMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
    burger.current.style.transform =
      isMenuOpen
        ? 'rotate(0deg)'
        : 'rotate(90deg)';
    menu.current.style.transform =
      isMenuOpen
        ? 'translate(100%)'
        : 'translate(-100%)';
    menu.current.style.opacity =
      isMenuOpen
        ? '0'
        : '1';
  }

  return (
    <div className={s.navbar}>
      <Logo />
      <div className={s.links}>
        <a className={s.link} href='/'>Product</a>
        <a className={s.link} href='/'>Services</a>
        <a className={s.link} href='/'>About</a>
        <Button color="ghost" size="sm" text="Log in" />
      </div>
      <div className={s.burger} onClick={() => menuOpenHandler()}>
        <img className={s.menuIcon} src={burgerIcon} alt="menu" ref={burger}></img>
        <div className={s.burger__links} ref={menu}>
          <a className={s.burger__link} href='/'>Product</a>
          <a className={s.burger__link} href='/'>Services</a>
          <a className={s.burger__link} href='/'>About</a>
          <Button color="ghost" size="sm" text="Log in" />
        </div>
      </div>
    </div>
  )
}
