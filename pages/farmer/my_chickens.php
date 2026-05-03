<!-- pages/farmer/my_chickens.php -->
<div id="section-my-chickens" class="section">
  <div class="card">
    <div class="card-header">
      <h3>🐔 My Chickens</h3>
      <button class="btn-sm btn-primary" onclick="openAddChicken()">+ Add Chicken</button>
    </div>
    <div style="overflow-x:auto">
      <table class="data-table">
        <thead><tr><th>Tag #</th><th>Name</th><th>Breed</th><th>Zone</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody id="my-chickens-tbody"></tbody>
      </table>
    </div>
  </div>
</div>
