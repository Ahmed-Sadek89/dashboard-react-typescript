// required
import React, { useState } from 'react';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// components
import Sidebar from '../Sidebar/Sidebar';

type drawerType = {
  isDark: string | null 
  setIsDark: React.Dispatch<React.SetStateAction<string | null>> 
}
const CustomDrawer = ( { isDark, setIsDark }: drawerType) =>  {
  const [state, setState] = useState<boolean>(false)

  const toggleDrawer =(open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setState(open);
    };
    console.log('isDark => ', isDark);
  return (
    <div className='drawer'>
      <button onClick={toggleDrawer(true)}>
        <FormatListBulletedOutlinedIcon sx={{
            'color': `${isDark === 'light' ? "#111": '#fff'}`,
          }}/>
      </button>
      <Drawer
        anchor={'left'}
        open={state}
        onClose={toggleDrawer(false)}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          className="drawer-box"
          sx={{
            'backgroundColor': `${isDark === 'light' ? "#fff": '#111'}`,
          }}
        >
          <Sidebar setIsDark={setIsDark}/>
        </Box>
      </Drawer>
    </div>
  );
}
export default CustomDrawer