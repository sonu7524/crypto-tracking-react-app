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
import { convertDate } from "../functions/convertDate";
import SelectGroup from "../components/common/SelectGroup";
import { getChartDataSet } from "../functions/getChartDataSet";

function CoinPage() {

    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [coinData, setCoinData] = useState();
    const [days, setDays] = useState(30);
    const [dataSet, setDataSet] = useState({});

    useEffect(() => {
        if(id){
            getData();
        }
    },[id, days]);

    async function getData(){
        const data = await getCoinData(id);
        if(data){
            convertCoinObject(setCoinData,data);
            const pricesData = await getCoinPrices(id, days);
            if(pricesData){
                setDataSet(getChartDataSet(pricesData, `prices in ${days} days`, "#8a3ffc"));
                console.log(dataSet);
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
                    <SelectGroup days={days} handleSelectChange={(e) => setDays(e.target.value)} />
                    <LineChart chartData={dataSet} />
                </div>
                <CoinInfo heading={coinData.name} desc={coinData.desc} />
                
            </div>
        }
    </div>
  );
}

export default CoinPage;