import Chart from 'chart.js';

export function renderProgressChart(canvasId, data) {
  const ctx = document.getElementById(canvasId).getContext('2d');
  return new Chart(ctx, {
    type: 'radar',
    data: {
      labels: data.labels,
      datasets: [{
        label: translate('personality_traits'),
        data: data.values,
        backgroundColor: 'rgba(106, 27, 154, 0.2)',
        borderColor: 'rgba(106, 27, 154, 1)'
      }]
    },
    options: {
      scale: { ticks: { beginAtZero: true, max: 100 } }
    }
  });
}
