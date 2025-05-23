import React from 'react'
import TextHeadings from '../../component/header-text/TextHeadings'
import OfferCard from '../../component/cards/OfferCard'
import './category.css'
import DestinationCard from '../../component/cards/DestinationCard'

const Category = () => {
  return (
    <div className='text-center cate'>
        <h4 >CATEGORY</h4>
        <h2>We Offer Best Services</h2>
        <div>
            <DestinationCard/>
        </div>
    </div>
  )
}

export default Category