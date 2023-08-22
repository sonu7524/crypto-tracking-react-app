import axios from "axios";
export const fetchCoins = () => {
    const data = axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=true")
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log(err);
        });
    return data;
}