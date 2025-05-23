import React from 'react'
import sat from '../../assets/images/sat.jpg'
import plane from '../../assets/images/planee.png'
import mic from '../../assets/images/mic.png'
import gear from '../../assets/images/gear.png'
import OfferCard from './OfferCard'
const DestinationCard = () => {
    const card =[
        {
            icon: sat,
            title : 'Calculated Weather',
            description:'Built wicket longer admire do barton vernity itself do in it'
        },
        {
            icon: plane,
            title : 'Best Flight',
            description:'Engrossed listening. park gate sell they west hard for the'
        },
        {
            icon: mic,
            title : 'Local Events',
            description:'Built wicket longer admire do barton vernity itself do in it'
        },
        {
            icon: gear,
            title : 'Customization',
            description:'Engrossed listening. park gate sell they west hard for the'
        },
    ]
  return (
    <div className='d-flex justify-content-center gap-5'>
        {
            card.map((details)=>(
                <OfferCard icon = {details.icon} description = {details.description} title = {details.title} />
            ))
        }
    </div>
  )
}

export default DestinationCard