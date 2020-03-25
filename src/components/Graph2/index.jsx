import React, { Component } from "react";
import Chart from "chart.js";
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
        labels: ["Instagram", "Twitter", "Facebook", "Twitch", "Youtube"],
        datasets: [
          {
            label: "Followers",
            data: [4, 4.5, 5, 4, 10],
            backgroundColor: [
              "transparent",
              "transparent",
              "transparent",
              "transparent",
              "transparent"
            ],
            borderColor: [
              "rgba(203,166,255,1)",
              "rgba(203,166,255,1)",
              "rgba(203,166,255,1)",
              "rgba(203,166,255,1)",
              "rgba(203,166,255,1)"
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
            max: 10,
            fontSize: 7,
            callback: function(value, index, values) {
              switch (value) {
                case 2:
                  return value + "k";
                case 4:
                  return value + "k";
                case 6:
                  return value + "k";
                case 8:
                  return value + "k";
                case 10:
                  return value + "k";
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
            color: "#CAC7C7",
            lineWidth: 4
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