import React from "react";
import { Line } from "react-chartjs-2";
import "./style.css";
import { Chart as ChartJS } from "chart.js/auto";

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
    };
    return (
        <div className="line-chart">
            <Line className="line-chart" data={chartData} options={options} />
        </div>
    );
}

export default LineChart;

