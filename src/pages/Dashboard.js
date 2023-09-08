import React, { useEffect, useState } from "react";
import Header from "../components/common/header";
import TabsComponent from "../components/Dashboard/TabsComponent";
import axios from "axios";
import SearchComponent from "../components/Dashboard/SearchComponent";
import PaginationComponent from "../components/Dashboard/Pagination";
import Loader from "../components/common/Loader";
import BackToTop from "../components/common/BackToTop";
import { fetchCoins } from "../functions/fetchCoins";

function DashboardPage() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");
    const [paginatedCoins, setPaginatedCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
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
        getCoins();
    }, []);

    async function getCoins(){
      const fetchData = await fetchCoins();
      if(fetchData){
        setCoins(fetchData);
        setPaginatedCoins(fetchData.slice(0, 10));
        setIsLoading(false);
      }
    }

      


  return (
    <>
    <Header />
    <BackToTop />
    {isLoading ? <Loader /> :
    <div>
        
        <SearchComponent search={search} onSearchChange={onSearchChange}/>
        <TabsComponent coins={search ? filteredCoins : paginatedCoins} />
        {search ? null : <PaginationComponent page={page} handleChange={(event,value)=> handleChange(event, value)} />}
    </div>}
    </>
  );
}

export default DashboardPage;
