// assets/js/navigation.js — Section Routing

function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));

  const s = document.getElementById('section-' + id);
  if (s) s.classList.add('active');
  event && event.currentTarget && event.currentTarget.classList.add('active');

  const titles = {
    'dashboard': 'Admin Dashboard',
    'chickens': 'Chicken Registry',
    'farmers': 'Farmer Management',
    'map-section': 'Map Monitoring',
    'movements': 'Movement History',
    'alerts-section': 'Alert Center',
    'analytics': 'Analytics',
    'zones': 'Zone Management',
    'reports': 'Reports',
    'settings': 'Settings',
    'users': 'User Management',
    'farmer-dashboard': 'Farmer Dashboard',
    'my-chickens': 'My Chickens',
    'farmer-map': 'My Map',
    'farmer-notifications': 'Notifications',
    'farmer-zones': 'My Zones',
    'farmer-reports': 'My Reports',
    'profile': 'My Profile',
  };
  document.getElementById('page-title').textContent = titles[id] || id;

  // Render sections on demand
  if (id === 'chickens') renderChickensTable();
  if (id === 'farmers') renderFarmersTable();
  if (id === 'movements') renderMovementsTable();
  if (id === 'alerts-section') renderFullAlerts();
  if (id === 'users') renderUsersTable();
  if (id === 'analytics') setTimeout(initAnalyticsCharts, 100);
  if (id === 'map-section') setTimeout(initAdminMapFull, 100);
  if (id === 'farmer-map') setTimeout(initFarmerMapFull, 100);
  if (id === 'farmer-notifications') renderFarmerNotifications();
  if (id === 'my-chickens') renderMyChickens();
}
