import React from 'react';
import image from '../Images/mainpic.jpg';
import '../../src/index.css'
function Body() {
  return (
    <div className='landingContainer' >
      
       <div className='landingImage' >
          {/* <img src={image} className='img'></img> */}
          <div className='img'>
          </div>
       
        
       
          <div className='carousel-caption' >
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
           

            </div>
       </div>
    </div>
  )
}

export default Body