<!-- modals/modal_farmer.php -->
<div class="modal-overlay" id="modal-farmer">
  <div class="modal">
    <button class="close-modal" onclick="closeModal('modal-farmer')">✕</button>
    <h3 id="farmer-modal-title">Add Farmer</h3>
    <div class="modal-form">
      <input type="hidden" id="edit-farmer-id">
      <div class="fg"><label>Full Name</label><input type="text" id="ff-name" placeholder="Juan Dela Cruz"/></div>
      <div class="fg"><label>Username</label><input type="text" id="ff-user" placeholder="juan_dc"/></div>
      <div class="fg"><label>Email</label><input type="email" id="ff-email" placeholder="juan@farm.ph"/></div>
      <div class="fg"><label>Password</label><input type="password" id="ff-pass" placeholder="Secure password"/></div>
      <div class="fg"><label>Assigned Zones</label><input type="text" id="ff-zones" placeholder="A, B"/></div>
    </div>
    <div class="modal-footer">
      <button class="btn-lg cancel" onclick="closeModal('modal-farmer')">Cancel</button>
      <button class="btn-lg primary" onclick="saveFarmer()">Save Farmer</button>
    </div>
  </div>
</div>
