import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const AreaChart = ({
  title = '',
  label_1 = '',
  label_2 = '',
  height = 220
}) => {

  const [chartOptions, setChartOptions] = useState({
    options: {
      series: [{
        name: label_1,
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: label_2,
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      chart: {
        height: height,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },

      title: {
        text: title,
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
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
            type="area"
            height={height}
          />
        </div>
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default AreaChart;
