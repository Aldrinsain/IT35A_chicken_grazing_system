<!-- pages/farmer/dashboard.php — Farmer Dashboard -->
<div id="section-farmer-dashboard" class="section">

  <div class="stats-grid" style="grid-template-columns:repeat(4,1fr)">
    <div class="stat-card"><div class="stat-icon ic-green">🐔</div><h3>My Chickens</h3><div class="val">25</div><div class="sub">Total chickens</div></div>
    <div class="stat-card"><div class="stat-icon ic-blue">✅</div><h3>Active Today</h3><div class="val">22</div><div class="sub">Chickens active</div></div>
    <div class="stat-card"><div class="stat-icon ic-orange">📍</div><h3>Outside Boundary</h3><div class="val">3</div><div class="sub">Need attention</div></div>
    <div class="stat-card"><div class="stat-icon ic-teal">↔️</div><h3>Movements Today</h3><div class="val">15</div><div class="sub">Total movements</div></div>
  </div>

  <div class="row">
    <div class="col-grow">
      <div class="card">
        <div class="card-header">
          <h3>🗺️ My Chicken Locations (Live)</h3>
          <div class="live-badge"><div class="live-dot"></div>Live</div>
        </div>
        <div id="farmer-map-div" style="height:320px"></div>
      </div>
    </div>
    <div class="col-fixed-300">
      <div class="card" style="margin-bottom:14px">
        <div class="card-header"><h3>🔔 Recent Notifications</h3></div>
        <div class="card-body" style="padding:8px 16px">
          <div class="alert-item"><div class="alert-dot" style="background:var(--blue)"></div><div><div class="a-text">Chicken #12 moved to Piles of leaves (dry or wet)</div><div class="a-time">2 mins ago</div></div></div>
          <div class="alert-item"><div class="alert-dot" style="background:var(--red)"></div><div><div class="a-text">Chicken #7 is outside boundary</div><div class="a-time">10 mins ago</div></div></div>
          <div class="alert-item"><div class="alert-dot" style="background:var(--blue)"></div><div><div class="a-text">Chicken #5 moved to Soft soil</div><div class="a-time">1 hour ago</div></div></div>
        </div>
        <a class="view-all">View all notifications →</a>
      </div>
      <div class="card">
        <div class="card-header"><h3>⏱️ Grazing Time Tracker</h3></div>
        <div class="card-body" style="padding:12px">
          <div class="grazing-tracker">
            <div class="graze-box"><h4>Location 1</h4><div class="gtime">2h 35m</div></div>
            <div class="graze-box"><h4>Location 2</h4><div class="gtime">1h 20m</div></div>
            <div class="graze-box total"><h4>Total</h4><div class="gtime">3h 55m</div></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Farmer Chicken Status Table -->
  <div class="card">
    <div class="card-header"><h3>🐔 My Chicken Status</h3></div>
    <div style="overflow-x:auto">
      <table class="data-table">
        <thead><tr><th>Tag #</th><th>Zone</th><th>Status</th><th>Last Movement</th><th>Grazing Time</th></tr></thead>
        <tbody id="farmer-table-tbody"></tbody>
      </table>
    </div>
  </div>

</div>
