import React, { Component } from "react";
import Chart from "chart.js";
import "./style.css";
let myLineChart;

Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif";
Chart.defaults.global.legend.display = false;
export default class Graph extends Component {
  chartRef = React.createRef();
  componentDidMount() {
    this.buildChart();
  }
  componentDidUpdate() {
    this.buildChart();
  }
  buildChart = () => {
    const myChartRef = this.chartRef.current.getContext("2d");
    myLineChart = new Chart(myChartRef, {
      type: "radar",
      data: {
        labels: ["FIFA 20", "CS:GO", "Dota 2", "LOL", "Overwatch", "Fortnite"],
        datasets: [
          {
            label: "Games",
            data: [50, 60, 50, 100, 10, 100],
            backgroundColor: [
              "transparent",
              "transparent",
              "transparent",
              "transparent",
              "transparent",
              "transparent"
            ],
            borderColor: [
              "rgba(123, 61, 209,1)",
              "rgba(123, 61, 209,1)",
              "rgba(123, 61, 209,1)",
              "rgba(123, 61, 209,1)",
              "rgba(123, 61, 209,1)",
              "rgba(123, 61, 209,1)"
            ],
            borderWidth: 6,
            pointBorderWidth: 0,
            pointBorderColor: "transparent"
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scale: {
          ticks: {
            maxTicksLimit: 8,
            min: 0,
            max: 100,
            fontSize: 7,
            callback: function(value, index, values) {
              switch (value) {
                case 20:
                  return value;
                case 40:
                  return value;
                case 60:
                  return value;
                case 80:
                  return value;
                case 100:
                  return value;
                default:
                  return "";
              }
            }
          },
          angleLines: {
            display: true
          },
          gridLines: {
            display: true,
            color: "#cac7c7",
            lineWidth: 4
            // callback: function(value) {
            //   if (value === 20) {
            //     this.lineWidth = 1;
            //   } else if (value === 40) {
            //     this.lineWidth = 5;
            //   }
            // }
          },
          pointLabels: {
            fontSize: 16,
            fontStyle: "bold"
          }
        }
      }
    });
  };
  render() {
    console.log(Chart.defaults.scale.gridLines);
    return (
      <div style={{ height: "100%", width: "100%" }}>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}
