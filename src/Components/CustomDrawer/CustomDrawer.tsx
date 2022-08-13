import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Sidebar from '../Sidebar/Sidebar';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

const CustomDrawer = () =>  {
  const [state, setState] = useState<boolean>(false)

  const toggleDrawer =
    (open: boolean) =>
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

  return (
    <div className='drawer'>
      <button onClick={toggleDrawer(true)}>
        <FormatListBulletedOutlinedIcon/>
      </button>
      <Drawer
        anchor={'left'}
        open={state}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 190 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Sidebar />
        </Box>
      </Drawer>
    </div>
  );
}
export default CustomDrawer