import React from 'react';

const Pagination = ({ handleClick, slideNum }) => {

  return (
    <div className='carousel__pagination' onClick={handleClick}>
      <span className={slideNum === 1 ? 'pagination active' : "pagination"} data-id='1'></span>
      <span className={slideNum === 2 ? 'pagination active' : "pagination"} data-id='2'></span>
      <span className={slideNum === 3 ? 'pagination active' : "pagination"} data-id='3'></span>
    </div>
  );
};

export default Pagination;