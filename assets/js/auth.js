// assets/js/auth.js — Login / Logout Logic

function doLogin() {
  const u = document.getElementById('login-user').value;
  const p = document.getElementById('login-pass').value;
  const r = document.getElementById('login-role').value;
  const creds = { admin: { u: 'admin', p: 'admin123' }, farmer: { u: 'farmer', p: 'farm123' } };

  if ((r === 'admin' && u === creds.admin.u && p === creds.admin.p) ||
      (r === 'farmer' && u === creds.farmer.u && p === creds.farmer.p)) {
    currentRole = r;
    currentUser = u;
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('app').style.display = 'block';
    setupDashboard();
  } else {
    alert('Invalid credentials. Try admin/admin123 or farmer/farm123');
  }
}

function doLogout() {
  currentRole = null;
  currentUser = null;
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('app').style.display = 'none';
  if (adminMap) { adminMap.remove(); adminMap = null; }
  if (farmerMap) { farmerMap.remove(); farmerMap = null; }
}

function setupDashboard() {
  const isAdmin = currentRole === 'admin';
  document.getElementById('admin-nav').style.display = isAdmin ? 'block' : 'none';
  document.getElementById('farmer-nav').style.display = isAdmin ? 'none' : 'block';
  document.getElementById('role-label').textContent = isAdmin ? 'ADMIN' : 'FARMER';
  document.getElementById('topbar-role').textContent = isAdmin ? 'ADMIN' : 'FARMER';
  document.getElementById('user-avatar').textContent = currentUser[0].toUpperCase();
  document.getElementById('user-name').textContent = isAdmin ? 'Administrator' : 'Juan Dela Cruz';
  document.getElementById('user-role-text').textContent = isAdmin ? 'System Admin' : 'Farmer';

  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));

  if (isAdmin) {
    document.getElementById('section-dashboard').classList.add('active');
    document.getElementById('page-title').textContent = 'Admin Dashboard';
    document.getElementById('page-sub').textContent = "Welcome back, Admin! Here's your system overview.";
    renderAll();
    setTimeout(initAdminMap, 200);
    setTimeout(initCharts, 300);
    startLiveUpdates();
  } else {
    document.getElementById('section-farmer-dashboard').classList.add('active');
    document.getElementById('page-title').textContent = 'Farmer Dashboard';
    document.getElementById('page-sub').textContent = 'Welcome, Juan Dela Cruz!';
    renderFarmerTable();
    renderMyChickens();
    setTimeout(initFarmerMap, 200);
    startLiveUpdates();
  }
}

// Enter key on password triggers login
document.getElementById('login-pass').addEventListener('keydown', e => {
  if (e.key === 'Enter') doLogin();
});
