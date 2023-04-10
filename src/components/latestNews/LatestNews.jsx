import React from 'react';
import s from './LatestNews.module.scss';
import { BlogItem } from '../common';
import { newsData } from './newsData'

export const LatestNews = (props) => {
  const { title = 'Latest news' } = props;

  return (
    <div className={s.latestNews}>
      <div className={s.header}>
        <div className={s.latestNews__title}>{title}</div>
      </div>
      <div className={s.news}>
        {
          newsData.map((newItem, index) => (
            <BlogItem
              key={index}
              size='sm'
              imgSrc={newItem.image}
              title={newItem.title}
              category={newItem.category}
              date={newItem.date}
              userIcon={newItem.userIcon}
              userName={newItem.userName}
            />
          ))
        }
      </div>
    </div>
  )
}
