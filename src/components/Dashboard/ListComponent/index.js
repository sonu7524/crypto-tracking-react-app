import React from "react";
import "./style.css";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import {motion} from 'framer-motion';

export default function ListComponent({coin}) {
  return (
    <motion.div 
    initial={{opacity: 0, x: -100}}
    animate={{opacity: 1, x: 0}}
    transition={{
      type: "smooth",
      duration: 2
  }}
    
    className={`list-container ${coin.price_change_percentage_24h < 0 && "list-container-red"}`}>
      <tr className="list-component">
        <td className="list-img"><img className="coin-image" src={coin.image}/></td>
        <td className="list-details">
            <div className="coin-details">
                <p className="coin-name">{coin.name}</p>
                <p className="coin-symbol">{coin.symbol}</p>
            </div>
        </td>
        
        <td className="list-price-change">
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
        </td>
        <td className="list-price">
            {coin.price_change_percentage_24h < 0 ? 
                <p className="current-price-red">${coin.current_price.toFixed(3)}</p> : <p className="current-price-green">${coin.current_price.toFixed(3)}</p>
            }
        </td>
        <td className="list-market-cap">${coin.market_cap.toLocaleString()}</td>
        <td className="list-total-volume">${coin.total_volume.toLocaleString()}</td>
      </tr>
    </motion.div>
  );
}
