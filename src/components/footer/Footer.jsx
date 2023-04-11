import React from 'react';
import s from './Footer.module.scss';
import cn from 'classnames';
import { Logo } from '../common';

export const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.logoBox}>
        <Logo />
        <div className={s.logoBox__text}>
          Social media validation business model canvas graphical user
          interface launch party creative facebook iPad twitter.
        </div>
        <div className={s.logoBox__text}>
          All rights reserved.
        </div>
      </div>
      <div className={s.container}>
        <div className={s.linksBox}>
          <a href="/" className={s.linksBox__link}>Landings</a>
          <a href="/" className={s.linksBox__link}>Home</a>
          <a href="/" className={s.linksBox__link}>Products</a>
          <a href="/" className={s.linksBox__link}>Services</a>
        </div>
        <div className={s.linksBox}>
          <a href="/" className={s.linksBox__link}>Company</a>
          <a href="/" className={s.linksBox__link}>Home</a>
          <a href="/" className={cn(s.linksBox__link, s.tag)}>Careers</a>
          <a href="/" className={s.linksBox__link}>Services</a>
        </div>
        <div className={s.linksBox}>
          <a href="/" className={s.linksBox__link}>Resources</a>
          <a href="/" className={s.linksBox__link}>Blog</a>
          <a href="/" className={s.linksBox__link}>Products</a>
          <a href="/" className={s.linksBox__link}>Services</a>
        </div>
      </div>
    </div>
  )
}
