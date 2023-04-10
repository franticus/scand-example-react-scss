import React from 'react';
import s from './BlogItem.module.scss';
import cn from 'classnames';
import blogImg from './img/blog-horizontal.png';
import userImg from './img/user-icon-1.png';

export const BlogItem = (props) => {
  const {
    size = 'lg',
    imgSrc = blogImg,
    title = 'Pitch termsheet backing validation focus release.',
    category = 'Category',
    date = 'November 22, 2021',
    userIcon = userImg,
    userName = 'Chandler Bing'
  } = props;

  return (
    <div className={cn({
      [s.lg]: size === 'lg',
      [s.sm]: size === 'sm',
    })}>
      <div className={s.blogItem}>
        <div className={s.imgBlock}>
          <img className={s.mainImg} src={imgSrc} alt='blog'></img>
        </div>
        <div className={s.textBlock}>
          <div>
            <div className={s.flex}>
              <div className={s.category}>{category}</div>
              <div className={s.date}>{date}</div>
            </div>
            <div className={s.mainTitle}>{title}</div>
          </div>
          <div className={s.flex}>
            <img className={s.userIcon} src={userIcon} alt='avatar'></img>
            <div className={s.userName}>{userName}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
