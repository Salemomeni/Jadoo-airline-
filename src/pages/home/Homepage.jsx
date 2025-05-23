import React from 'react'
import './home.css'
import traveller from "../../assets/images/Traveller.png"
import plane from '../../assets/images/plane.png'
import play from '../../assets/images/PlayButton.png'
import Button from '../../component/button/Button'
import Category from '../category/Category'
import Destination from '../destination/Destination'
import Card from '../destination/card'
import subPic from '../../assets/images/Group42Big.png'
import subPic2 from '../../assets/images/Group42sm.png'
import EasyAndFast from '../payment-steps/EasyAndFast'
import Testimonials from '../testimonals/Testimonials'
import Sponsors from '../../component/footers/Sponsors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../component/footers/Footer'
const Homepage = () => {
    return (
        <>
            <div className='d-flex'>
                <div className='w-50'>
                    <div className='writeUp'>
                        <h5>BEST DESTINATIONS AROUND THE WORLD</h5>
                        <h3>Travel,  enjoy <br />and live a new <br /> and full life</h3>
                        <p>Built wicket longer admire do barton vernity itself in it <br />. preferred to sportsmen it engrossed listening. park gate <br /> sell they west hard for the.</p>
                        <div className='d-flex gap-5'>
                            <Button btnstyl='findmore' >Findmore</Button>
                            <Button btnstyl='playButton' ><span className='playLogo'><img src={play} /></span>Play Demo</Button>
                        </div>

                    </div>
                </div>
                <div className='div2 '>
                    <img className='plane1' src={plane} alt="" />
                    <p><img src={plane} alt="" /></p>
                </div>

            </div>
            <Category />
            <Destination />
            <EasyAndFast />
            <Testimonials />
            <Sponsors />

            <div className='subscribe container'>
                <div className='img'>
                    <img className='w-100' src={subPic2} alt="" />
                </div>
                <div className='img2'>
                    <img className='w-100' src={subPic} alt="" />
                </div>
                <div className='subsription-content'>
                    <h1 className='text-center'>
                        Subscribe to get information, latest news and other
                        interesting offers about Jadoo</h1>
                    <div className='d-flex gap-2 sub-mail'>
                        <input className='input' type="email" placeholder=' Enter your Email' />
                        <button type="button">Subscribe</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Homepage