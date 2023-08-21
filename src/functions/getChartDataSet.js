import { convertDate } from "./convertDate";
import { convertNumbers } from "./convertNumbers";
export const getChartDataSet = (pricesData, label, color) => {
    let dataSet = {};
    if(pricesData.length > 0){
        dataSet = {
            labels: pricesData.map((item) => convertDate(item[0])),
            datasets: [
                {
                    label: label,
                    data: pricesData.map((item) => item[1]),
                    fill: true,
                    tension: 0.25,
                    backgroundColor: "transparent",
                    borderColor: color,
                    pointRadius: 0,
                },
            ],
        };
    }
    return dataSet;
};