import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const RadialChart = ({ 
  title = '',
  height = 220
 }) => {
  const activeUsers = 70; // Actual active users
  const totalUsers = 98; // Total users
  const percentage = ((activeUsers / totalUsers) * 100).toFixed(2);

  const [chartOptions, setChartOptions] = useState({
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
        toolbar: {
          show: true,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: '70%',
            background: '#fff',
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24,
            },
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0,
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35,
            },
          },
          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: '#888',
              fontSize: '17px',
            },
            value: {
              formatter: (val) => parseInt(val),
              color: '#111',
              fontSize: '36px',
              show: true,
            },
          },
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#ABE5A1'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: 'round',
      },
      labels: ['Peratus'],
      tooltip: {
        enabled: true,
        custom: ({ seriesIndex, w }) => {
          return `
            <div style="padding: 10px; border-radius: 4px; background-color: #f4f4f4; color: #333;">
              Pengguna Aktif: <strong> ${activeUsers}</strong><br/>
              Jumlah Pengguna: <strong> ${totalUsers}</strong><br/>
              Peratusan: <strong> ${percentage}%</strong>
            </div>
          `;
        },
      },
      title: {
        text: title,
        // align: 'left',
        // margin: 0,
        // offsetY: 0,
        // style: {
        //   fontSize: '20px',
        //   fontWeight: 'bold',
        //   color: '#263238',
        // },
      },
    },
  });

  const [chartSeries, setChartSeries] = useState([percentage]);

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
            series={chartSeries}
            type="radialBar"
            height={height}
          />
        </div>
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default RadialChart;
