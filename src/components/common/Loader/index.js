import React from "react";
import "./style.css";
import CircularProgress from '@mui/material/CircularProgress';

function Loader() {
    return (
        <div className="loader">
            <CircularProgress sx={{
                color: "var(--purple)",
            }} />
        </div>
    );
}

export default Loader;