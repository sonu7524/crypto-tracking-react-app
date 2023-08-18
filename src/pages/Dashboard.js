import React, { useEffect, useState } from "react";
import Header from "../components/common/header";
import SearchComponent from "../components/Dashboard/SearchComponent";
import TabsComponent from "../components/Dashboard/TabsComponent";
import axios from "axios";

function DashboardPage() {
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=true")
        .then(res => {
            setCoins(res.data);
            console.log(res.data);
        })
        .catch(err => console.log(err));
    }, []);
  return (
    <div>
        <Header />
        <SearchComponent />
        <TabsComponent coins={coins} />
    </div>
  );
}

export default DashboardPage;
