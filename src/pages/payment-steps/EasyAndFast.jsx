import React from 'react'
import logo from '../../assets/images/Group7.png'
import payment from '../../assets/images/Group12.png'
import airport from '../../assets/images/Group11.png'
import mask from '../../assets/images/MaskGroup.png'
import trip from '../../assets/images/trip.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faPaperPlane, faMap, faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import './payment.css'
import Card from '../payment-steps/Card.jsx'

const EasyAndFast = () => {
  const card = [
    {
      title: 'Choose Destination',
      logo: logo,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.cilis, totquis autem eaque!'
    },
    {
      title: "Make payment",
      logo: payment,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.cilis, totquis autem eaque!'
    },
    {
      title: 'Reach Airport on Selected Date',
      logo: airport,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.cilis, totquis autem eaque!'
    },
  ]
  return (
    <div className='container'>
      <div className='d-flex'>
        <div className='w-50 '>
          <div className='EasyAndFast'>
            <h6>Easy and Fast</h6>
            <h2>Book your Next Trip In 3 Easy Steps</h2>
          </div>
          <div className='d-flex flex-column gap-2 mt-5'>
            {
              card.map((details) => (
                <Card title={details.title} description={details.description} logo={details.logo} />
              ))
            }
          </div>
        </div>
        <div className='w-50 d-flex align-items-center justify-content-center'>
          <div className='TripDiv '>
            <div className='TripDiv-Img mb-3'>
              <div className='div'>
                <img src={trip} />
              </div>
            </div>
            <div className='container d-flex flex-column'>
              <h4 className='mx-3 trip-h4'>Trip to Greece</h4>
              <div className='text2 d-flex mx-3 gap-2'>
                <p>14-29 June|</p>
                <p>By Robbin John</p>
              </div>
              <div className='d-flex gap-4 mx-3 text3 text-center'>
                <p className='bg-light rounded-circle'><FontAwesomeIcon icon={faLeaf} /></p>
                <p className='bg-light rounded-circle'><FontAwesomeIcon icon={faMap} /></p>
                <p className='bg-light rounded-circle'><FontAwesomeIcon icon={faPaperPlane} /></p>
              </div>
              <div className='d-flex justify-content-between mx-3 text4'>
                <p className='ongoing'><span><FontAwesomeIcon icon={faBuilding} /></span>24 people on Going</p>
                <p className='heart'><FontAwesomeIcon icon={faHeart} /></p>
              </div>
              <div className='Trip-rome-con '>
                <div className='d-flex Trip-rome container '>
                  <div>
                    <img src={mask} alt="" />
                  </div>

                  <div className='container'>
                    <h6>Ongoing</h6>
                    <h5>Trip to Rome</h5>
                    <h4><span>40%</span> completed</h4>
                    <div>
                      <input type="range" min="1" max="100" value="40" class="slider" id="myRange"></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EasyAndFast