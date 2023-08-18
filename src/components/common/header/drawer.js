import {useState} from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import "./style.css";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);


  return (
    <div>
          <IconButton style={{color: 'white'}} onClick={()=> setOpen(true)}><MenuRoundedIcon /></IconButton>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={()=> setOpen(false)}
          >
            <div className="mobile-links">
      
                <a className='link' href="/">Home</a>
                <a className='link' href="/watchlist">Watchlist</a>
                <a className='link' href="/compare">Compare</a>
                <a className='link' href='/dashboard'>Dashboard</a>
      
            </div>
          </Drawer>
    </div>
  );
}