import React from "react";
import "./style.css";

function Button({text, onClick, outLined}) {
    return (
        <div className="button">
            <button className={outLined ? "outline-btn": "btn"}  onClick={() => onClick()}>{text}</button>
        </div>
    );
}


export default Button;