import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { Link } from "react-router-dom";
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import React, { useState } from "react";
import "./styles.css";
import { motion } from "framer-motion";
import { IconButton } from "@mui/material";
import { addToWatchlist } from "../../../functions/addToWatchlist";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { hasBeenAdded } from "../../../functions/hasBeenAdded";
import { removeFromWatchlist } from "../../../functions/removeFromWatchlist";


export default function GridComponent({ coin, delay, isWatchlistPage }) {

    const [added, setAdded] = useState(hasBeenAdded(coin.id));
   
    
  return (
    <Link to={`/coin/${coin.id}`} className="coin-link">
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
        
        style={{ display: isWatchlistPage && !added && "none" }}
    className={`coin-container ${coin.price_change_percentage_24h < 0 && "coin-container-red"}`}>
        <div className="coin-rank">
            <div className="coin-item">
                <img className="coin-image" src={coin.image} alt="coin" />
                <div className="coin-details">
                    <p className="coin-symbol">{coin.symbol}</p>
                    <p className="coin-name">{coin.name}</p>
                </div>
            </div>
            <IconButton
            onClick={(e) => {
              e.preventDefault();
              if (added) {
                removeFromWatchlist(coin.id);
                setAdded(false);
              } else {
                addToWatchlist(coin.id);
                setAdded(true);
              }
            }}
          >
            {added ? (
              <StarRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
                sx={{ fontSize: "2rem !important" }}
              />
            ) : (
              <StarBorderRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
                sx={{ fontSize: "2rem !important" }}
              />
            )}
          </IconButton>
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
    </Link>
  );
}