import React, {useState} from "react";
import "./style.css";

export default function CoinInfo({heading, desc}) {
    const [isClicked, setIsClicked] = useState(false);
    const shortdesc = desc.slice(0, 350) + "..."+"<span class='read-more'>Read More</span>";
    const longdesc = desc +"<br><br> <span class='read-less'>Read Less</span>";
    return (
        <div className="grey-wrapper">
            <h2>{heading}</h2> 
            {desc.length > 350 ? 
            <p onClick={()=> setIsClicked(!isClicked)} className="coin-info-desc" 
                dangerouslySetInnerHTML={isClicked ? {__html: longdesc} : {__html: shortdesc}} /> 
            : <p className="coin-info-desc" dangerouslySetInnerHTML={{__html: longdesc}} />}

        </div>
    )
}