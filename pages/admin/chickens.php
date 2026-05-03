<!-- pages/admin/chickens.php — Chicken Registry (CRUD) -->
<div id="section-chickens" class="section">
  <div class="card">
    <div class="card-header">
      <h3>🐔 Chicken Registry</h3>
      <button class="btn-sm btn-primary" onclick="openAddChicken()">+ Add Chicken</button>
    </div>
    <div style="overflow-x:auto">
      <table class="data-table">
        <thead><tr><th>Image</th><th>Tag #</th><th>Name</th><th>Breed</th><th>Farmer</th><th>Current Zone</th><th>Status</th><th>Weight (kg)</th><th>Actions</th></tr></thead>
        <tbody id="chickens-tbody"></tbody>
      </table>
    </div>
  </div>
</div>
