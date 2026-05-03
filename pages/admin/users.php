<!-- pages/admin/users.php — User Management -->
<div id="section-users" class="section">
  <div class="card">
    <div class="card-header">
      <h3>👥 User Management</h3>
      <button class="btn-sm btn-primary" onclick="openAddFarmer()">+ Add User</button>
    </div>
    <div style="overflow-x:auto">
      <table class="data-table">
        <thead><tr><th>Avatar</th><th>Name</th><th>Role</th><th>Username</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody id="users-tbody"></tbody>
      </table>
    </div>
  </div>
</div>
