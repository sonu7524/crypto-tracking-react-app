import React from "react";
import "./style.css";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import {motion} from 'framer-motion';

export default function GridComponent({ coin }) {
  return (
    <motion.div
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{
            type: "smooth",
            duration: 2}}
    className={`coin-container ${coin.price_change_percentage_24h < 0 && "coin-container-red"}`}>
        <div className="coin-item">
            <img className="coin-image" src={coin.image} alt="coin" />
            <div className="coin-details">
                <p className="coin-name">{coin.name}</p>
                <p className="coin-symbol">{coin.symbol}</p>
            </div>
        </div>
        <div className="coin-price-change">
            {coin.price_change_percentage_24h < 0 ? (
                <div className="coin-percentage">
                    <p className="red">{coin.price_change_percentage_24h.toFixed(2)}%</p>
                    <TrendingDownIcon className="red" />
                </div>
            ) : (
                <div className="coin-percentage">
                    <p className="green">{coin.price_change_percentage_24h.toFixed(2)}%</p>
                    <TrendingUpIcon className="green" />
                </div>
            )}
        </div>
        <div className="current-price">
        {coin.price_change_percentage_24h < 0 ? 
            <p className="current-price-red">${coin.current_price.toFixed(3)}</p> : <p className="current-price-green">${coin.current_price.toFixed(3)}</p>
        }
        </div>
        <div className="market-details">
            <p><b>Market Cap:</b> ${coin.market_cap.toLocaleString()}</p>
            <p><b>Total Volume:</b> ${coin.total_volume.toLocaleString()}</p>
        </div>
    </motion.div>
  );
}