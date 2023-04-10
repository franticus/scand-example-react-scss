import React from 'react';
import s from './Header.module.scss';

export const Header = (props) => {
  const { smallTitle = 'Blog', bigTitle = 'Thoughts and words' } = props;

  return (
    <div className={s.header}>
      <div className={s.header__secondary}>{smallTitle}</div>
      <div className={s.header__primary}>{bigTitle}</div>
    </div>
  )
}
