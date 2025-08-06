import React, { useEffect, useRef } from 'react';

/**
 * مكون لعرض مخطط دائري يوضح نتائج شخصية DISC
 * @param {Object} data - { D: number, I: number, S: number, C: number }
 */
export default function ChartWrapper({ data }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // تأكد من تحميل Chart.js
    if (!window.Chart) {
      console.error('Chart.js غير محمل');
      return;
    }

    const ctx = chartRef.current?.getContext('2d');
    if (!ctx) return;

    const labels = ['D', 'I', 'S', 'C'];
    const values = labels.map(trait => data[trait] || 0);
    const colors = {
      D: '#ef4444',
      I: '#f59e0b',
      S: '#10b981',
      C: '#3b82f6'
    };

    // إذا كان المخطط موجودًا، قم بتحديثه
    if (chartInstance.current) {
      chartInstance.current.data.datasets[0].data = values;
      chartInstance.current.update();
      return;
    }

    // إنشاء مخطط جديد
    chartInstance.current = new window.Chart(ctx, {
      type: 'radar',
       {
        labels: labels,
        datasets: [{
          label: 'نتائج الشخصية',
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

    // تنظيف عند تفريغ المكون
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} height="300"></canvas>;
}