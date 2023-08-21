import axios from "axios"

export const getCoinPrices = async (id, days) => {
    const prices = axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
    .then(res => {
        return res.data.prices;
    })
    .catch(err => {
        console.log(err);
    })
    return prices;
}