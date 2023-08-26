import React, {useState} from "react";
import "./style.css";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { Tooltip } from "@mui/material";
import {convertNumbers} from "../../../functions/convertNumbers";
import {motion} from 'framer-motion';
import { Link } from "react-router-dom";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import { IconButton } from "@mui/material";
import { addToWatchlist } from "../../../functions/addToWatchlist";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { hasBeenAdded } from "../../../functions/hasBeenAdded";
import { removeFromWatchlist } from "../../../functions/removeFromWatchlist";

function ListComponent({ coin, delay, isWatchlistPage }) {
    const [added, setAdded] = useState(hasBeenAdded(coin.id));
  

  return (
    <Link to={`/coin/${coin.id}`} className="coin-link">
    <motion.tr 
    style={{ display: isWatchlistPage && !added && "none" }}
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: delay }}
    
    className="list-row">
      <Tooltip title="Coin Logo" placement="bottom">
      <td className="td-image"><img className="coin-image" src={coin.image} alt="img" /></td>
      </Tooltip>
      <Tooltip title="Coin Name" placement="bottom">
        <td>
                <p className="coin-symbol td-coin-sym">{coin.symbol}</p>
                <p className="coin-name td-coin-name">{coin.name}</p>
                
        </td>
        </Tooltip>
        <Tooltip title="Percentage Change In 24hrs" placement="bottom">
        <td>
            {coin.price_change_percentage_24h < 0 ? (
                <div className="coin-percentage">
                    <p className="red td-percentage">{coin.price_change_percentage_24h.toFixed(2)}%</p>
                    <TrendingDownIcon className="red td-icon" />
                </div>
            ) : (
                <div className="coin-percentage">
                    <p className="green td-percentage">{coin.price_change_percentage_24h.toFixed(2)}%</p>
                    <TrendingUpIcon className="green td-icon" />
                </div>
            )}
        </td>
        </Tooltip>
        <Tooltip title="Current Price" placement="bottom">
        <td className="cureent-price td-align-center">
        {coin.price_change_percentage_24h < 0 ? 
            <p className="current-price-red td-price">${coin.current_price.toFixed(3)}</p> : <p className="current-price-green td-price">${coin.current_price.toFixed(3)}</p>
        }
        </td>
        </Tooltip>
        <Tooltip title="Market Capital" placement="bottom-end">
        <td className="market-details td-align-right mobile-mkt-cap"><p>${convertNumbers(coin.market_cap)}</p></td>
        </Tooltip>
        <Tooltip title="Market Capital" placement="bottom-end">
        <td className="market-details td-align-right desktop-mkt-cap" ><p>${coin.market_cap.toLocaleString()}</p></td>
        </Tooltip>
        <Tooltip title="Total Volume" placement="bottom-end">
        <td className="market-details td-align-right total-volume"><p>${coin.total_volume.toLocaleString()}</p></td>
        </Tooltip>
        <td style={{ width: "fit-content" }}>
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
              />
            ) : (
              <StarBorderRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
              />
            )}
          </IconButton>
        </td>
    </motion.tr>
    </Link>
  );
}

export default ListComponent;