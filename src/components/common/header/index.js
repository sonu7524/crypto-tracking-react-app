import { Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./style.css";
import TemporaryDrawer from "./drawer";
import Button from "../button";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Header() {

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
    <header className="header">
      <button data-text="Awesome" class="button">
    <span class="actual-text">&nbsp;TrackCryptoPro.&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;TrackCryptoPro.&nbsp;</span>
</button>
      <div className="links">
      <Switch
          checked={darkMode}
          onClick={() => {
            changeMode();
          }}
        />
        <Link to={'/'} className='link' href="/">Home</Link>
        <Link className='link' to={"/watchlist"}>Watchlist</Link>
        <Link className='link' to={"/compare"} >Compare</Link>
        <Link className="button-link" to={'/dashboard'}><Button text="Dashboard" onClick={()=> console.log("Button Clicked")} outLined={false} /></Link>
        {/* <Button text="Dashboard" onClick={handleClick} outLined={true} /> */}
      </div>
      <div className="mobile-drawer">
          <TemporaryDrawer />
      </div>
      
    </header>
  );
}

export default Header;