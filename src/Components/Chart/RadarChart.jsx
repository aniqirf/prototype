import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const RadarChart = ({
  title = '',
  height = 220
}) => {

  const [chartOptions, setChartOptions] = useState({
    options : {
      series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
      }, {
        name: 'Series 2',
        data: [20, 30, 40, 80, 20, 80],
      }, {
        name: 'Series 3',
        data: [44, 76, 78, 13, 43, 10],
      }],
      chart: {
        height: height,
        type: 'radar',
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      title: {
        text: title,
      },
      stroke: {
        width: 2
      },
      fill: {
        opacity: 0.1
      },
      markers: {
        size: 0
      },
      yaxis: {
        stepSize: 20
      },
      xaxis: {
        categories: ['Pemantauan', 'Analitik', 'Pentadbiran', 'Laman Utama', 'Kajian', 'Penyelidikan']
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      },
      legend: {
        show: false,
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
      }
    },
  });

  return (
    <div>
      <div id="card">
        <div id="chart">
          <ReactApexChart
            options={chartOptions.options}
            series={chartOptions.options.series}
            type="radar"
            height={height}
          />
        </div>
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default RadarChart;
