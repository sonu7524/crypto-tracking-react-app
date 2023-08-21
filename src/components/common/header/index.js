import React from "react";
import "./style.css";
import TemporaryDrawer from "./drawer";
import Button from "../button";
import { Link } from "react-router-dom";

function Header() {

  return (
    <header className="header">
      <button data-text="Awesome" class="button">
    <span class="actual-text">&nbsp;TrackCryptoPro.&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;TrackCryptoPro.&nbsp;</span>
</button>
      <div className="links">
        <Link to={'/'} className='link' href="/">Home</Link>
        {/* <Link className='link' to={"/watchlist"}>Watchlist</Link>
        <Link className='link' to={"/compare"} >Compare</Link> */}
        <Link to={'/dashboard'}><Button text="Dashboard" onClick={()=> console.log("Button Clicked")} outLined={false} /></Link>
        {/* <Button text="Dashboard" onClick={handleClick} outLined={true} /> */}
      </div>
      <div className="mobile-drawer">
          <TemporaryDrawer />
      </div>
      
    </header>
  );
}

export default Header;