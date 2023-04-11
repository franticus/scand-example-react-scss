import React from 'react';
import s from './Button.module.scss'
import cn from 'classnames';

export const Button = (props) => {
  const { color = 'ghost', size = 'sm', text = 'Button' } = props;

  return (
    <button className={cn(s.button, {
      [s.ghost]: color === 'ghost',
      [s.primary]: color === 'primary',
      [s.sm]: size === 'sm',
      [s.lg]: size === 'lg',
    })}>
      {text}
    </button>
  )
}
