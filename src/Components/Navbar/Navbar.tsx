// required
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Dispatch } from 'react';
// import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// components
import CustomDrawer from '../CustomDrawer/CustomDrawer';

type navbarType = {
  setIsDark: Dispatch<React.SetStateAction<"light" | "dark">> 
}
const Navbar = ( { setIsDark }: navbarType ) => {
  return (
    <div className='navbar'>
      <div className="container navbar-content">
          <div className="navbar-part1">
            <input type="text" placeholder='Search...' />
            <SearchOutlinedIcon className='navbar-part1-searchIcon' />
          </div>
          <CustomDrawer />

          <div className="navbar-part2">
            
            <div className="navbar-lang">
              <LanguageOutlinedIcon />
              <span>English</span>
            </div>
            
            <DarkModeOutlinedIcon className='navbar-icon' onClick={() => { //dark 
              setIsDark('dark')
            }} />
            {/* <WbSunnyOutlinedIcon className='navbar-icon'/> */}
            <FullscreenExitOutlinedIcon className='navbar-icon' onClick={() => { //light 
              setIsDark('light')
            }}/>
            <div className="websoket">
              <NotificationsNoneOutlinedIcon className='icon'/>
              <span>1</span>
            </div>
            <div className="websoket">
              <ChatBubbleOutlineOutlinedIcon  className='icon'/>
              <span>2</span>
            </div>
            {/* <FormatListBulletedOutlinedIcon className='navbar-icon'/> */}
            
              <img
                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="avatar"
              />
            
            <SettingsOutlinedIcon className='navbar-icon'/>
          </div>
      </div>
    </div>
  )
}

export default Navbar