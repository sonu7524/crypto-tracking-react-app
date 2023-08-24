export const convertCoinObject = ((setState, data) => {
    setState({
        id: data.id,
        name: data.name,
        symbol: data.symbol,
        image: data.image.large,
        desc: data.description.en,
        current_price: data.market_data.current_price.usd,
        market_cap: data.market_data.market_cap.usd,
        total_volume: data.market_data.total_volume.usd,
        price_change_percentage_24h: data.market_data.price_change_percentage_24h
    })
});