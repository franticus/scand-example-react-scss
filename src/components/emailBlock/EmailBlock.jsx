import React from 'react';
import s from './EmailBlock.module.scss';
import { Button } from '../common';

export const EmailBlock = () => {
  return (
    <div className={s.emailBlock}>
      <div className={s.title}>
        An enterprise template to ramp up your company website
      </div>
      <div className={s.email}>
        <input
          className={s.email__input}
          type="email"
          placeholder="Your email address"
        ></input>
        <Button color="primary" size="lg" text="Start now" />
      </div>
    </div>
  )
}
