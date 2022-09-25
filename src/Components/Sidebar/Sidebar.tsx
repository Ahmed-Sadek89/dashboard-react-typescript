// required
import { Dispatch } from 'react'
import { useNavigate } from 'react-router-dom'
// components
import SliderPart2 from './SliderPart2'

type sidebarType = {
  setIsDark: Dispatch<React.SetStateAction<"light" | "dark">> 
}
const Sidebar = ({ setIsDark }: sidebarType ) => {
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
          <span onClick={() => { //light
            setIsDark('light')
          }}></span>
          <span onClick={() => { //light 
            setIsDark('dark')
          }}></span>
        </div>
      </div>
     
    </div>
  )
}

export default Sidebar