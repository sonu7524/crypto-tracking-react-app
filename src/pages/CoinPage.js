import React, { useEffect, useState } from "react";
import Header from "../components/common/header";
import { useParams } from "react-router-dom";
import Loader from "../components/common/Loader";
import ListComponent from "../components/Dashboard/ListComponent";
import { convertCoinObject } from "../functions/covertObject";
import CoinInfo from "../components/coin/coinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/coin/LineChart";
import SelectGroup from "../components/common/SelectGroup";
import { getChartDataSet } from "../functions/getChartDataSet";
import { selectDataSet } from "../functions/selectDataSet";
import ToggleComponent from "../components/coin/ToggleButton";

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
                //console.log(getChartDataSet(pricesData, `prices in ${days} days`, "#8a3ffc"));
                setDataSet(getChartDataSet(pricesData, `prices in ${days} days`, "#8a3ffc"));
                
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
                <SelectGroup selectDataSet={selectDataSet} handleSelectChange={(e) => setDays(e.target.value)} />
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