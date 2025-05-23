import React from 'react'
import './destination.css'
import Card from './card'

const Destination = () => {
  const Cards = [
    {
      image: 'https://cdn.britannica.com/01/94501-050-7C939333/Big-Ben-London.jpg',
      location: 'London, UK',
      price: '$43k',
      trip: '12 days trip'

    },
    {
      image: 'https://cdn.britannica.com/16/99616-050-72CD201A/Colosseum-Rome.jpg',
      location:'Rome, Italy',
      price:'$5.2k',
      trip:'10 Days Trip'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ50Fc_bJFhKPX_1A3brWtE0yNvxzp4F106y0pSUwMalMtIBx1LHiFF5ALd_87iy_VBZdU&usqp=CAU',
      location: 'Full Europe',
      price: '$15k',
      trip: '28 Days Trip'
    }
  ]

return (
  <div className='text-center con'>
    <h4> Top Selling</h4>
    <h2>Top Destination</h2>
    <div className=' d-flex justify-content-center gap-5 trans'>
      {
        Cards.map((details)=>(
          <Card image = {details.image} price = {details.price} location ={details.location} trip ={details.trip}/>
        ))
      }
      <div className='spring'>
        
      </div>
    </div>
  </div>
)
}

export default Destination