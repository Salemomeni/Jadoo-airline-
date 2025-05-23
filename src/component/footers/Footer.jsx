import React from 'react'
import google from '../../assets/images/GooglePlay.png'
import apple from '../../assets/images/PlayStore.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <>
        <div className='footerCon d-flex gap-5 container' >
            <div className="jadoo">
                <h1>Jadoo.</h1>
                <p>Book your trip in minute, get full
                    <br/>Control for much longer.
                </p>
            </div>
            <div className="company">
                <h3>Company</h3>
                <li><a href="">About</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">Mobile</a></li>
            </div>
            <div className="contact">
                <h3>Contact</h3>
                <li><a href="">Help/FAQ</a></li>
                <li><a href="">Press</a></li>
                <li><a href="">Affilates</a></li>
            </div>
            <div className="more">
                <h3>More</h3>
                <li><a href="">Airlinefees</a></li>
                <li><a href="">Airline</a></li>
                <li><a href="">Low Fare Tips</a></li>
            </div>
            <div className="socials">
                <div className='icons d-flex gap-3'>
                    <div><FontAwesomeIcon icon={faFacebookF} /></div>
                    <div><FontAwesomeIcon icon={faInstagram} /></div>
                    <div><FontAwesomeIcon icon={faTwitter} /></div>
                </div>
                <h6>Discover our App</h6>
                <div className='d-flex gap-3'>
                    <div>
                        <img src={google}alt="" />
                    </div>
                    <div>
                        <img src={apple} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <h6 className='copyright'>All rights reserved@jadoo.co</h6>
        </>
    )
}

export default Footer