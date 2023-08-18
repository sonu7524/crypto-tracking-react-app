import React from "react";
import "./style.css";
import TemporaryDrawer from "./drawer";
import Button from "../button";
import { Link } from "react-router-dom";

function Header() {

  return (
    <header className="header">
      <h1 className="logo">TrackCryptoPro<span>.</span></h1>
      <div className="links">
        <Link to={'/'} className='link' href="/">Home</Link>
        <Link className='link' href="/watchlist">Watchlist</Link>
        <Link className='link' href="/compare">Compare</Link>
        <Link to={'/dashboard'} className='link'><Button text="Dashboard" onClick={()=> console.log("Button Clicked")} outLined={false} /></Link>
        {/* <Button text="Dashboard" onClick={handleClick} outLined={true} /> */}
      </div>
      <div className="mobile-drawer">
          <TemporaryDrawer />
      </div>
      
    </header>
  );
}

export default Header;