import React from 'react'

const Image = ({ slide, type, title, date, subtext, id, left }) => {

  let bg = { 
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide})`,
    backgroundSize: "cover",
    position: 'relative',
    left
  };

  return (
    <div className="carousel__img" style={bg} data-id={id} >
      
      <figcaption className="carousel__img__caption">

        <h3 className='carousel__img__title' data-id={id}>{type}</h3>
        <h3 className='carousel__img__title' data-id={id}>{title}</h3>
        <span className='carousel__img__date'data-id={id}>{date}</span>
        <p className='carousel__img__details'data-id={id}>{subtext}</p>
        
      </figcaption>

    </div>
  )
}

export default Image;