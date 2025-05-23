import React from 'react'
import '..testimonals/testimonail.css'
const Testimonials = () => {
  return (
    <div className='d-flex mt-5 container'>
      <div className='text w-50'>
        <h5>Testimonails</h5>
        <h2>What People Say About Us.</h2>
      </div>
      <div className='container h w-50' >
        <div className="card-wrappe">
          <div className="card-lis">
            <div className="cards">
              <div className='card-img'>
                <img src="https://static.vecteezy.com/system/resources/previews/021/872/541/large_2x/biometric-passport-of-attractive-female-natural-look-healthy-skin-photo.jpg" alt="" />
              </div>
              <div className='ok'>
                <div className='container card-content'>
                  <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                  <h4>Mike taylor</h4>
                  <h6>Lahore, Pakistan</h6>
                </div>
                <div className='container card-content'>
                  <p>“ndows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                  <h4>Mike taylor</h4>
                  <h6>Lahore, Pakistan</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials