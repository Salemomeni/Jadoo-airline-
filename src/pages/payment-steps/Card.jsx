import React from 'react'
import './payment.css'
const Card = (proops) => {
    const {title,logo,description} = proops
  return (
    <div>
         <div className='d-flex gap-3 '>
        <div>
            <img src={logo}/>
        </div>
        <div className='cardText'>
            <h4>{title||'Choose Destination'}</h4>
            <p>{description || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.cilis, totquis autem eaque!'}</p>
        </div>
    </div>
    </div>
  )
}

export default Card