import React, { useEffect, useState } from "react";
import Header from "../components/common/header";
import { useParams } from "react-router-dom";
import Loader from "../components/common/Loader";
import ListComponent from "../components/Dashboard/ListComponent";
import { convertCoinObject } from "../functions/convertCoinObject";
import CoinInfo from "../components/coin/coinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/coin/LineChart";
import SelectDays from "../components/common/SelectDays";
import { getChartDataSet } from "../functions/getChartDataSet";
import ToggleComponent from "../components/common/ToggleButton";

function CoinPage() {

    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [coinData, setCoinData] = useState();
    const [days, setDays] = useState(30);
    const [dataSet, setDataSet] = useState({});
    const [priceType, setPriceType] = useState('current_price');

    useEffect(() => {
        if(id){
            getData();
        }
    },[id, days, coinData, dataSet, isLoading]);

    async function getData(){
        const data = await getCoinData(id);
        if(data){
            convertCoinObject(setCoinData, data);
            const pricesData = await getCoinPrices(id, days, priceType);
            if(pricesData){
                
                setDataSet(getChartDataSet(pricesData, "#8a3ffc"));
                
                setIsLoading(false);
            }

        }
            
    }
        
  return (
    <div>
        <Header />
        {isLoading ? <Loader /> : 
            <div>
                <div className="grey-wrapper">
                    <ListComponent coin={coinData} />
                </div>
                <div className="grey-wrapper">
                    <SelectDays days={days} setDays={setDays} />
                    <ToggleComponent alignment={priceType} setPriceType={setPriceType} />
                    <LineChart priceType={priceType} chartData={dataSet} />
                </div>
                <CoinInfo heading={coinData.name} desc={coinData.desc} />
                
            </div>
        }
    </div>
  );
}

export default CoinPage;