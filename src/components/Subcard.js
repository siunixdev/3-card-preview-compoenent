import React from 'react'

const Subcard = ({ img, title, description, bgcolor, textcolor, position, dataLength }) => {
  let positionClass = ""

  if(position === 0) {
    positionClass = "start"
  }

  if(position === dataLength - 1) {
    positionClass = "end"
  }

  return (
    <div className={`subcard ${bgcolor} ${positionClass}`}>
      <img src={img} className='image' />
      <div className='title'>
        <span>{title}</span>
      </div>
      <p className='description'>
        {description}
      </p>
      <div className={`button ${textcolor}`}>Learn more</div>
    </div>
  )
}

export default Subcard