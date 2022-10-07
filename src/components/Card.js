import React from 'react'

const Card = ({id,price, title, description}) => {
  return (
    <div className={`${id === 0 ? 'main-card':'main-card-green'}`}>
        <p className={'o-price'}>{price}</p>
        <p className="title">{title}</p>
        <p className="desc">{description}</p>
        <p className={'orange-btn'}>ORDER NOW</p>
    </div>
  )
}

export default Card