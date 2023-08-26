import { Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { toast } from "react-toastify";
import "./style.css";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    setDarkMode(!darkMode);
    toast.success("Theme Changed!");
    const mode = localStorage.getItem("theme");
    if (mode == "dark") {
      setLight();
    } else {
      setDark();
    }
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

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
                <Switch
          checked={darkMode}
          onClick={() => {
            changeMode();
          }}
        />
            </div>
          </Drawer>
    </div>
  );
}