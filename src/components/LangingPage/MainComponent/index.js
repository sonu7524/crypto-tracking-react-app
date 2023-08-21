import React from "react";
import "./style.css";
import Button from "../../common/button";
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

function MainComponent() {

    return (
        <div className="landing-flex">
            <div className="left-component">
                <motion.h1
                    initial={{opacity: 0, y: 100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}} 
                className="tracking-text"
                >Tracking Crypto
                </motion.h1>
                <motion.h1
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.75}} 
                className="real-time-text">In Real Time.</motion.h1>
                <motion.p
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}} 
                className="description-text">Tracking crypto status through a public api in real time. </motion.p>
                <motion.p initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}} className="description-text">Visit to the dashboard now!</motion.p>
                <motion.div
                initial={{opacity: 0, x: 100}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 2}} 
                className="button-container">
                    <Link to="/dashboard"><Button onClick={()=> console.log("button clicked")} text="Dashboard" /></Link>
                    <Button text="Share" outLined={true} />
                </motion.div>
            </div>
            <motion.div
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 2}}
            className="phone-component">
                <motion.img
                initial={{y: -15}}
                animate={{y: 15}}
                transition={{
                    type: "smooth",
                    
                    repeatType: "mirror",
                    duration: 2,
                    repeat: Infinity
                }} 
                src={iphone} alt="iphone" className="iphone" />
                <motion.img src={gradient} alt="gradient" className="gradient" />
            </motion.div>
         </div>
    );
}

export default MainComponent;