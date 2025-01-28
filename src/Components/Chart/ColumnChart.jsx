import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const ColumnChart = ({
  title = '',
  height = 220
}) => {

  const [chartOptions, setChartOptions] = useState({
    options : {
      series: [{
        name: 'Net Profit',
        data: [44, 55, 57]
      }, {
        name: 'Revenue',
        data: [76, 85, 101]
      }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36]
      }],
      chart: {
        type: 'bar',
        height: 200
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr'],
        axisBorder: {
          show: false, // Hides the line on the x-axis
        },
        axisTicks: {
          show: false, // Hides the ticks on the x-axis
        },
      },
      yaxis: {
        show: false,
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
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

  useEffect(() => {
    // Update the title dynamically when the prop changes
    setChartOptions((prev) => ({
      ...prev,
      options: {
        ...prev.options,
        title: {
          ...prev.options.title,
          text: title,
        },
      },
    }));
  }, [title]);

  return (
    <div>
      <div id="card">
        <div id="chart">
          <ReactApexChart
            options={chartOptions.options}
            series={chartOptions.options.series}            
            type="bar"
            height={height}
          />
        </div>
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ColumnChart;
