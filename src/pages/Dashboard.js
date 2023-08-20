import React, { useEffect, useState } from "react";
import Header from "../components/common/header";
import TabsComponent from "../components/Dashboard/TabsComponent";
import axios from "axios";
import SearchComponent from "../components/Dashboard/SearchComponent";
import PaginationComponent from "../components/Dashboard/Pagination";

function DashboardPage() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");
    const [paginatedCoins, setPaginatedCoins] = useState([]);
    const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1)*10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  };
    const onSearchChange = (e) => {
        setSearch(e.target.value);
    }

    var filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=true")
        .then(res => {
          setCoins(res.data);
            setPaginatedCoins(res.data.slice(0, 10));
            console.log(res.data);
        })
        .catch(err => console.log(err));
    }, []);
  return (
    <div>
        <Header />
        <SearchComponent search={search} onSearchChange={onSearchChange}/>
        <TabsComponent coins={search ? filteredCoins : paginatedCoins} />
        {search ? null : <PaginationComponent page={page} handleChange={(event,value)=> handleChange(event, value)} />}
    </div>
  );
}

export default DashboardPage;
