import React from 'react';

const MasonryItem = ({ item, idx }) => {

  return (
    <div className='masonry__item' tabIndex={`${idx}`}>
      <img src={item.pic} alt='' />
      <a href='#' className='masonry__item-title' tabIndex={`${idx + 1}`}>{item.title}</a>
      <span className='masonry__item-date'>{item.date}</span>
      <span className='masonry__item-text'>Presented by <a href='#' tabIndex={`${idx + 2}`}>lorem ipsum</a></span>
    </div>
  );
};

export default MasonryItem;
