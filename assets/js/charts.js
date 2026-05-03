// assets/js/charts.js — Chart.js Initialization

let chartInstances = {};

function initCharts() {
  // Zone donut
  const zc = document.getElementById('zoneChart');
  if (zc && !chartInstances.zone) {
    chartInstances.zone = new Chart(zc, {
      type: 'doughnut',
      data: {
        labels: ['Soft soil', 'Piles of leaves (dry or wet)', 'Kitchen waste or scraps area', 'Dust or sandy ground', 'Animal manure piles (goat or cow)'],
        datasets: [{ data: [30,28,25,20,17], backgroundColor: ['#3b82f6','#22c55e','#f97316','#8b5cf6','#ef4444'], borderWidth: 2, borderColor: '#fff' }]
      },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, cutout: '70%' }
    });
  }

  // Movement line
  const mc = document.getElementById('movementChart');
  if (mc && !chartInstances.movement) {
    const hrs = ['12AM','2AM','4AM','6AM','8AM','10AM','12PM','2PM','4PM','6PM','8PM','10PM','12AM'];
    chartInstances.movement = new Chart(mc, {
      type: 'line',
      data: {
        labels: hrs,
        datasets: [{ label: 'Movements', data: [2,1,1,3,8,12,15,18,22,20,25,28,24],
          borderColor: '#3b82f6', backgroundColor: 'rgba(59,130,246,.1)', fill: true, tension: .4, pointRadius: 3 }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,.04)' }, ticks: { font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { size: 9 }, maxRotation: 0 } }
        }
      }
    });
  }
}

function initAnalyticsCharts() {
  const ac = document.getElementById('analyticsChart');
  if (ac && !chartInstances.analytics) {
    chartInstances.analytics = new Chart(ac, {
      type: 'bar',
      data: {
        labels: ['Soft soil', 'Piles of leaves (dry or wet)', 'Kitchen waste or scraps area', 'Dust or sandy ground', 'Animal manure piles (goat or cow)'],
        datasets: [
          { label: 'Entries', data: [45,38,30,22,15], backgroundColor: 'rgba(59,130,246,.8)', borderRadius: 6 },
          { label: 'Exits',   data: [40,35,28,20,12], backgroundColor: 'rgba(34,197,94,.8)',  borderRadius: 6 }
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: 'top' } },
        scales: { y: { beginAtZero: true }, x: { grid: { display: false } } }
      }
    });
  }

  const wc = document.getElementById('weeklyChart');
  if (wc && !chartInstances.weekly) {
    chartInstances.weekly = new Chart(wc, {
      type: 'line',
      data: {
        labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets: [{ label: 'Movements', data: [35,42,38,50,45,30,42],
          borderColor: '#8b5cf6', backgroundColor: 'rgba(139,92,246,.1)', fill: true, tension: .4, pointRadius: 4 }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true }, x: { grid: { display: false } } }
      }
    });
  }
}
