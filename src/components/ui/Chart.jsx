import React, { useRef } from 'react';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const Chart = ({ data, lang }) => {
  const chartRef = useRef(null);

  const labels = {
    ar: ['D (الهيمنة)', 'I (التأثير)', 'S (الثبات)', 'C (الوعي)'],
    en: ['D (Dominance)', 'I (Influence)', 'S (Steadiness)', 'C (Conscientiousness)']
  };

  const chartData = {
    labels: labels[lang],
    datasets: [
      {
        label: lang === 'ar' ? 'تحليل الشخصية (نموذج DISC)' : 'Personality Analysis (DISC Model)',
        data: [data.D, data.I, data.S, data.C],
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(59, 130, 246, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
        pointLabels: {
          color: 'rgba(255, 255, 255, 0.8)',
          font: {
            size: 14,
          },
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.6)',
          backdropColor: 'transparent',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'rgba(255, 255, 255, 0.8)',
          font: {
            size: 16,
          },
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <Radar ref={chartRef} data={chartData} options={options} />
    </div>
  );
};

export default Chart;
