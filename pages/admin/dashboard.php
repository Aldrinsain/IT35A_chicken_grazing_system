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
