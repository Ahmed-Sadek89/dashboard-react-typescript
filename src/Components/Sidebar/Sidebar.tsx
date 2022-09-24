// required
import { useNavigate } from 'react-router-dom'
// components
import SliderPart2 from './SliderPart2'

const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <div className='sidebar'>
      <div className="slider-content">

        <div className="slider-content-part1" onClick={() => navigate('/')}>
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