<!-- pages/admin/dashboard.php — Admin Dashboard -->
<div id="section-dashboard" class="section active">

  <!-- Stats Grid -->
  <div class="stats-grid">
    <div class="stat-card"><div class="stat-icon ic-purple">🐔</div><h3>Total Chickens</h3><div class="val" id="stat-total">120</div><div class="sub">All registered</div></div>
    <div class="stat-card"><div class="stat-icon ic-blue">👨‍🌾</div><h3>Total Farmers</h3><div class="val">15</div><div class="sub">Registered farmers</div></div>
    <div class="stat-card"><div class="stat-icon ic-orange">📍</div><h3>Outside Boundary</h3><div class="val" id="stat-outside">8</div><div class="sub">Need attention</div></div>
    <div class="stat-card"><div class="stat-icon ic-green">🏗️</div><h3>Active Zones</h3><div class="val">5</div><div class="sub">Monitoring zones</div></div>
    <div class="stat-card"><div class="stat-icon ic-teal">↔️</div><h3>Movements Today</h3><div class="val" id="stat-moves">42</div><div class="sub">Total movements</div></div>
    <div class="stat-card"><div class="stat-icon ic-red">🔔</div><h3>Active Alerts</h3><div class="val" id="stat-alerts">6</div><div class="sub">Requires attention</div></div>
  </div>

  <!-- Row 1: Map + Right Panel -->
  <div class="row">
    <div class="col-grow">
      <div class="card">
        <div class="card-header">
          <h3>🗺️ Live Chicken Map</h3>
          <div class="live-badge"><div class="live-dot"></div>Live — updates every 4s</div>
        </div>
        <div id="admin-map" style="height:360px"></div>
        <div style="padding:10px 16px;display:flex;gap:16px;border-top:1px solid var(--border);background:#f8fafc;border-radius:0 0 14px 14px">
          <span style="font-size:12px;display:flex;align-items:center;gap:5px"><span style="color:var(--green)">●</span> Inside Boundary</span>
          <span style="font-size:12px;display:flex;align-items:center;gap:5px"><span style="color:var(--blue)">●</span> Moving</span>
          <span style="font-size:12px;display:flex;align-items:center;gap:5px"><span style="color:var(--red)">●</span> Outside Boundary</span>
        </div>
      </div>
    </div>
    <div class="col-fixed-300">
      <div class="card" style="margin-bottom:14px">
        <div class="card-header"><h3>🔔 Recent Alerts</h3><span style="font-size:11px;color:var(--text2)">Last 24h</span></div>
        <div class="card-body" style="padding:8px 16px" id="alerts-list">
          <div class="alert-item"><div class="alert-dot" style="background:var(--red)"></div><div><div class="a-text">Chicken #12 is outside boundary</div><div class="a-time">2 mins ago</div></div></div>
          <div class="alert-item"><div class="alert-dot" style="background:var(--orange)"></div><div><div class="a-text">Chicken #5 no movement for 2h</div><div class="a-time">15 mins ago</div></div></div>
          <div class="alert-item"><div class="alert-dot" style="background:var(--blue)"></div><div><div class="a-text">Chicken #23 moved to Zone C</div><div class="a-time">1 hour ago</div></div></div>
          <div class="alert-item"><div class="alert-dot" style="background:var(--red)"></div><div><div class="a-text">Chicken #8 is outside boundary</div><div class="a-time">2 hours ago</div></div></div>
        </div>
        <a class="view-all">View all alerts →</a>
      </div>
      <div class="card">
        <div class="card-header"><h3>📊 Zone Distribution</h3></div>
        <div class="card-body" style="padding:8px 0 0">
          <div class="chart-wrap-sm"><canvas id="zoneChart" role="img" aria-label="Donut chart showing chicken distribution across zones">Soft soil: 30, Piles of leaves (dry or wet): 28, Kitchen waste or scraps area: 25, Dust or sandy ground: 20, Animal manure piles (goat or cow): 17</canvas></div>
          <div class="legend-row">
            <div class="legend-item"><div class="legend-dot" style="background:#3b82f6"></div>Soft soil<div class="legend-val">30 (25%)</div></div>
            <div class="legend-item"><div class="legend-dot" style="background:#22c55e"></div>Piles of leaves (dry or wet)<div class="legend-val">28 (23.3%)</div></div>
            <div class="legend-item"><div class="legend-dot" style="background:#f97316"></div>Kitchen waste or scraps area<div class="legend-val">25 (20.8%)</div></div>
            <div class="legend-item"><div class="legend-dot" style="background:#8b5cf6"></div>Dust or sandy ground<div class="legend-val">20 (16.7%)</div></div>
            <div class="legend-item"><div class="legend-dot" style="background:#ef4444"></div>Animal manure piles (goat or cow)<div class="legend-val">17 (14.2%)</div></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Row 2: Movements Table + Side Charts -->
  <div class="row">
    <div class="col-grow">
      <div class="card">
        <div class="card-header">
          <h3>🐔 Recent Chicken Movements</h3>
          <button class="btn-sm btn-primary" onclick="openAddChicken()">+ Add Chicken</button>
        </div>
        <div style="overflow-x:auto">
          <table class="data-table">
            <thead><tr><th>Image</th><th>Tag #</th><th>Current Zone</th><th>From Zone</th><th>To Zone</th><th>Last Update</th><th>Status</th><th>Moves Today</th><th>Action</th></tr></thead>
            <tbody id="movements-tbody"></tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-fixed-340">
      <div class="card" style="margin-bottom:14px">
        <div class="card-header"><h3>📊 Boundary Status</h3></div>
        <div class="card-body">
          <div class="boundary-row">
            <label>Inside Boundary<span style="color:var(--green);font-weight:700">112 (93.3%)</span></label>
            <div class="progress-bar"><div class="progress-fill" style="width:93.3%;background:var(--green)"></div></div>
          </div>
          <div class="boundary-row">
            <label>Outside Boundary<span style="color:var(--red);font-weight:700">8 (6.7%)</span></label>
            <div class="progress-bar"><div class="progress-fill" style="width:6.7%;background:var(--red)"></div></div>
          </div>
          <div class="boundary-row">
            <label>Moving<span style="color:var(--blue);font-weight:700">23 (19.2%)</span></label>
            <div class="progress-bar"><div class="progress-fill" style="width:19.2%;background:var(--blue)"></div></div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header"><h3>📈 Movement Per Hour</h3><span style="font-size:11px;color:var(--text2)">Today</span></div>
        <div class="card-body" style="padding:8px">
          <div class="chart-wrap"><canvas id="movementChart" role="img" aria-label="Line chart of movements per hour today">Movements throughout the day</canvas></div>
        </div>
      </div>
    </div>
  </div>

</div>
