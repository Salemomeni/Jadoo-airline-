import React from 'react'
import sponsor1 from '../../assets/images/sponsor1.png'
import sponsor2 from '../../assets/images/sponsor2.png'
import sponsor3 from '../../assets/images/sponsor3.png'
import sponsor4 from '../../assets/images/sponsor4.png'
import sponsor5 from '../../assets/images/sponsor5.png'
import './footer.css'
const Sponsors = () => {
    return (
        <div className=' sponsor-con justify-content-center  align-items-center'>
            <div className='d-flex sponsorDiv w-75 gap-5' >
                <div><img src={sponsor1} alt="" /></div>
                <div><img src={sponsor2} alt="" /></div>
                <div><img src={sponsor3} alt="" /></div>
                <div><img src={sponsor4} alt="" /></div>
                <div><img src={sponsor5} alt="" /></div>
            </div>
        </div>
    )
}

export default Sponsors