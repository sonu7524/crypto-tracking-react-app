import axios from "axios"

export const getCoinPrices = async (id, days, alignment) => {
    const data = axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
    .then(res => {
        if(alignment === "current_price"){
            return res.data.prices;
        }else if(alignment === "market_cap"){
            return res.data.market_caps;
        }else if(alignment === "total_volume"){
            return res.data.total_volumes;
        }
    })
    .catch(err => {
        console.log(err);
    })
    return data;
}