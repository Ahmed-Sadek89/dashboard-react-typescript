import React from 'react'
import SliderPart2 from './SliderPart2'



const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="slider-content">

        <div className="slider-content-part1">
            sadekAdmin
        </div>
        
        <SliderPart2 />

        <div className="slider-content-part3 container">
          <p>theme</p>
          <span>white</span>
          <span>dark</span>
        </div>
      </div>
     
    </div>
  )
}

export default Sidebar