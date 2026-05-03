<!-- pages/admin/farmers.php — Farmer Management -->
<div id="section-farmers" class="section">
  <div class="card">
    <div class="card-header">
      <h3>👨‍🌾 Farmer Management</h3>
      <button class="btn-sm btn-primary" onclick="openAddFarmer()">+ Add Farmer</button>
    </div>
    <div style="overflow-x:auto">
      <table class="data-table">
        <thead><tr><th>Avatar</th><th>Name</th><th>Username</th><th>Email</th><th>Chickens</th><th>Zones</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody id="farmers-tbody"></tbody>
      </table>
    </div>
  </div>
</div>
