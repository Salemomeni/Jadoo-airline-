import React from 'react'
import london from '../../assets/images/London.png'
const Card = (proops) => {
  const {image,location,price,trip}=proops
  return (
    <div className='cardCont'>
        <img className='qq' src={image ||'https://cdn.britannica.com/01/94501-050-7C939333/Big-Ben-London.jpg'}/>
        <div className='d-flex justify-content-between px-4'>
            <h5 >{location||'London,Uk'}</h5>
            <p >{price ||'$42k'}</p>
        </div>
        <p>{trip||"12Days Trip"}</p>
    </div>
  )
}

export default Card