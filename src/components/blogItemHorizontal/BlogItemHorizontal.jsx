import React from 'react';
import s from './BlogItemHorizontal.module.scss';
import blogImg from './img/blog-horizontal.png';
import userImg from './img/user-icon-1.png';

export const BlogItemHorizontal = (props) => {
  const {
    imgSrc = blogImg,
    title = 'Pitch termsheet backing validation focus release.',
    category = 'Category',
    date = 'November 22, 2021',
    userIcon = userImg,
    userName = 'Chandler Bing'
  } = props;

  return (
    <div className={s.blogItemHorizontal}>
      <div className={s.imgBlock}>
        <img className={s.mainImg} src={imgSrc} alt='blog'></img>
      </div>
      <div className={s.textBlock}>
        <div className={s.flex}>
          <div className={s.category}>{category}</div>
          <div className={s.date}>{date}</div>
        </div>
        <div className={s.mainTitle}>{title}</div>
        <div className={s.flex}>
          <img className={s.userIcon} src={userIcon} alt='avatar'></img>
          <div className={s.userName}>{userName}</div>
        </div>
      </div>
    </div>
  )
}
