import { convertDate } from "./convertDate";
export const getChartDataSet = (pricesData, color) => {
    let dataSet = {};
    if(pricesData.length > 0){
        dataSet = {
            labels: pricesData.map((item) => convertDate(item[0])),
            datasets: [
                {
                    label: "Price in USD",
                    data: pricesData.map((item) => item[1]),
                    tension: 0.25,
                    borderColor: color,
                    pointRadius: 0,
                },
            ],
        };
    }
    return dataSet;
};