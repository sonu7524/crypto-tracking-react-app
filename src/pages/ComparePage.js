import React,{useState, useEffect} from "react";
import Header from "../components/common/header";
import SelectCoins from "../components/Compare/SelectCoins";
import SelectDays from "../components/common/SelectDays";
import ToggleComponent from "../components/common/ToggleButton";
import LineChart from "../components/coin/LineChart";
import { getCoinPrices } from "../functions/getCoinPrices";
import { convertCoinObject } from "../functions/convertCoinObject";
import { getCoinData } from "../functions/getCoinData";
import { convertDate } from "../functions/convertDate";
import Loader from "../components/common/Loader";
import ListComponent from "../components/Dashboard/ListComponent";
import CoinInfo from "../components/coin/coinInfo";

export default function ComparePage() {
    let [crypto1, setCrypto1] = useState("bitcoin");
    let [crypto2, setCrypto2] = useState("ethereum");
    let [days, setDays] = useState(30);
    let [priceType, setPriceType] = useState('current_price');
    let [crypto1Data, setCrypto1Data] = useState({});
    let [crypto2Data, setCrypto2Data] = useState({});
    let [dataSet, setDataSet] = useState({});
    let [isLoading, setIsLoading] = useState(true);
    console.log(crypto1, crypto2, days);

    useEffect(() => {
        getData();
    },[crypto1,crypto2,days,priceType]);

    async function getData(){
        const data1 = await getCoinData(crypto1);
        const data2 = await getCoinData(crypto2);
        if(data1 && data2){
            convertCoinObject(setCrypto1Data, data1);
            convertCoinObject(setCrypto2Data, data2);
            const pricesData1 = await getCoinPrices(crypto1, days, priceType);
            const pricesData2 = await getCoinPrices(crypto2, days, priceType);
            console.log("crypto1", pricesData1, "crypto2", pricesData2);
            if(pricesData1 && pricesData2){
                
                setDataSet({
                    labels: pricesData1.map((item) => convertDate(item[0])),
                    datasets: [
                        {
                            label: `${crypto1Data.name} Price in USD`,
                            data: pricesData1.map((item) => item[1]),
                            tension: 0.25,
                            borderColor: "#8a3ffc",
                            pointRadius: 0,
                        },
                        {
                            label: `${crypto2Data.name} Price in USD`,
                            data: pricesData2.map((item) => item[1]),
                            tension: 0.25,
                            borderColor: "#3a80e9",
                            pointRadius: 0,
                        }
                    ],
                });
                
                setIsLoading(false);
            }

        }
            
    }

    return (
        <div>
        <Header />
        {isLoading ? <Loader /> : (
            <div>
                    <div className="select-flex">
                        <SelectCoins crypto1={crypto1} crypto2={crypto2} setCrypto1={setCrypto1} setCrypto2={setCrypto2} />
                        <SelectDays className="selectDays" days={days} setDays={setDays} />
                    </div>
                    <div className="grey-wrapper">
                        <ListComponent coin={crypto1Data} />
                    </div>
                    <div className="grey-wrapper">
                        <ListComponent coin={crypto2Data} />
                    </div>
                    <div className="grey-wrapper chart-wrapper">
                        <ToggleComponent priceType={priceType} setPriceType={setPriceType} />
                        <LineChart priceType={priceType} chartData={dataSet} multiAxis={true} />
                    </div>
                    <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
                    <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
                    
                       
            </div>
        )}
    </div>
    )
}