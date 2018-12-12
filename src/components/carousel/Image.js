import React from 'react'

const Image = ({ slide, heading, date, subtext, id, left }) => {

  let bg = { 
    background: `url(${slide})`,
    backgroundSize: "cover",
    position: 'relative',
    left
  };

  return (
    <div className="carousel__img" style={bg} data-id={id} >
      
      <span className="filler"></span>

      <h3 className='carousel__img__title' data-id={id}>{heading}</h3>
      <span className='carousel__img__date'data-id={id}>{date}</span>
      <p className='carousel__img__details'data-id={id}>{subtext}</p>

    </div>
  )
}

export default Image;