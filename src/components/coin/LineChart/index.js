import React from "react";
import { Line } from "react-chartjs-2";
import "./style.css";
import { Chart as ChartJS } from "chart.js/auto";
import { convertNumbers } from "../../../functions/convertNumbers"

function LineChart({ chartData, priceType, multiAxis }) {
    const options = {
        plugins: {
            legend: {
                display: multiAxis ? true : false,
            },
        },
        responsive: true,
        interaction: {
            intersect: false,
            mode: "index",
        },
        scales: {
            y: {
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, ticks) {
                        if (priceType === "current_price") {
                            return "$" + value.toLocaleString();
                        }
                        else{
                            return convertNumbers(value);
                        }
                    }
                }
            }
        }
    };
    return (
        <div className="line-chart">
            <Line className="line-chart" data={chartData} options={options} />
        </div>
    );
}

export default LineChart;

