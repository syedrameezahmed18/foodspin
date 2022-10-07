import React from 'react'

const Card = ({price, title, description}) => {
  return (
    <div className="main-card">
        <p className={'o-price'}>{price}</p>
        <p>{title}</p>
        <p>{description}</p>
        <p className={'orange-btn'}>ORDER NOW</p>
    </div>
  )
}

export default Card