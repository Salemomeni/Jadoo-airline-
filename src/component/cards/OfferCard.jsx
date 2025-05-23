import React from 'react'
import '../cards/card.css'
const OfferCard = (proops) => {
    const{title,description,icon} = proops
  return (
    <div className='cardCon'>
        <div className=''>
            <div className='angle' >
                <img src={icon}/>
                </div>
        </div>
        <h3 className='overflow-hidden'>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default OfferCard