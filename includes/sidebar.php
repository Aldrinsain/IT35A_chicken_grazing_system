<!-- includes/sidebar.php — Sidebar Navigation -->
<div class="sidebar">
  <div class="sidebar-header">
    <div class="sidebar-logo">
      <div class="s-icon">🐔</div>
      <div><span>CGMS</span><br><small>Monitoring System</small></div>
    </div>
  </div>
  <div class="sidebar-role" id="role-label">ADMIN</div>

  <!-- Admin Navigation -->
  <nav id="admin-nav">
    <div class="sidebar-section">Main</div>
    <a class="active" onclick="showSection('dashboard')"><span class="nav-icon">📊</span>Dashboard</a>
    <a onclick="showSection('chickens')"><span class="nav-icon">🐔</span>Chickens</a>
    <a onclick="showSection('farmers')"><span class="nav-icon">👨‍🌾</span>Farmers</a>
    <a onclick="showSection('map-section')"><span class="nav-icon">🗺️</span>Map Monitoring</a>
    <a onclick="showSection('movements')"><span class="nav-icon">📍</span>Movement History</a>
    <div class="sidebar-section">Management</div>
    <a onclick="showSection('alerts-section')"><span class="nav-icon">🔔</span>Alerts<span class="nav-badge" id="alert-count">6</span></a>
    <a onclick="showSection('analytics')"><span class="nav-icon">📈</span>Analytics</a>
    <a onclick="showSection('zones')"><span class="nav-icon">🏗️</span>Zones</a>
    <a onclick="showSection('reports')"><span class="nav-icon">📋</span>Reports</a>
    <div class="sidebar-section">System</div>
    <a onclick="showSection('users')"><span class="nav-icon">👥</span>Users</a>
    <a onclick="showSection('settings')"><span class="nav-icon">⚙️</span>Settings</a>
  </nav>

  <!-- Farmer Navigation -->
  <nav id="farmer-nav" style="display:none">
    <div class="sidebar-section">My Farm</div>
    <a class="active" onclick="showSection('farmer-dashboard')"><span class="nav-icon">📊</span>Dashboard</a>
    <a onclick="showSection('my-chickens')"><span class="nav-icon">🐔</span>My Chickens</a>
    <a onclick="showSection('farmer-map')"><span class="nav-icon">🗺️</span>Map</a>
    <a onclick="showSection('farmer-notifications')"><span class="nav-icon">🔔</span>Notifications<span class="nav-badge">2</span></a>
    <a onclick="showSection('farmer-zones')"><span class="nav-icon">🏗️</span>My Zones</a>
    <a onclick="showSection('farmer-reports')"><span class="nav-icon">📋</span>Reports</a>
    <a onclick="showSection('profile')"><span class="nav-icon">👤</span>Profile</a>
  </nav>

  <div class="sidebar-footer">
    <div class="user-info">
      <div class="user-avatar" id="user-avatar">A</div>
      <div>
        <p id="user-name">Administrator</p>
        <span id="user-role-text">System Admin</span>
      </div>
    </div>
    <button class="logout-btn" onclick="doLogout()">🚪 Sign Out</button>
  </div>
</div>
