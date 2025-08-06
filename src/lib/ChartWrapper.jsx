import React, { useEffect, useRef } from 'react';

export default function ChartWrapper({ data }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!window.Chart) return;

    const ctx = chartRef.current?.getContext('2d');
    if (!ctx) return;

    const labels = ['D', 'I', 'S', 'C'];
    const values = labels.map(trait => data[trait] || 0);

    if (chartInstance.current) {
      chartInstance.current.data.datasets[0].data = values;
      chartInstance.current.update();
      return;
    }

    chartInstance.current = new window.Chart(ctx, {
      type: 'radar',
      data: {
        labels: labels,
        datasets: [{
          label: 'درجة الشخصية',
          data: values,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          pointBackgroundColor: 'rgba(255, 99, 132, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: { color: 'rgba(255, 255, 255, 0.2)' },
            grid: { color: 'rgba(255, 255, 255, 0.2)' },
            pointLabels: { color: 'rgba(255, 255, 255, 0.8)', font: { size: 14 } },
            ticks: { color: 'rgba(255, 255, 255, 0.6)', backdropColor: 'transparent' }
          }
        },
        plugins: {
          legend: {
            labels: { color: 'rgba(255, 255, 255, 0.8)', font: { size: 16 } }
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} height="300"></canvas>;
}