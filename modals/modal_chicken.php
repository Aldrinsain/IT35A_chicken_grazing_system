<!-- modals/modal_chicken.php -->
<div class="modal-overlay" id="modal-chicken">
  <div class="modal">
    <button class="close-modal" onclick="closeModal('modal-chicken')">✕</button>
    <h3 id="chicken-modal-title">Add Chicken</h3>
    <div class="modal-form">
      <input type="hidden" id="edit-chicken-id">
      <div class="fg"><label>Tag Number</label><input type="text" id="f-tag" placeholder="e.g. CH-045"/></div>
      <div class="fg"><label>Chicken Name</label><input type="text" id="f-name" placeholder="e.g. Goldie"/></div>
      <div class="fg"><label>Breed</label><input type="text" id="f-breed" placeholder="e.g. Rhode Island Red"/></div>
      <div class="fg"><label>Assigned Farmer</label>
        <select id="f-farmer">
          <option value="Juan Dela Cruz">Juan Dela Cruz</option>
          <option value="Maria Santos">Maria Santos</option>
          <option value="Pedro Reyes">Pedro Reyes</option>
        </select>
      </div>
      <div class="fg"><label>Current Zone</label>
        <select id="f-zone">
          <option value="Soft soil">Soft soil</option>
          <option value="Piles of leaves (dry or wet)">Piles of leaves (dry or wet)</option>
          <option value="Kitchen waste or scraps area">Kitchen waste or scraps area</option>
          <option value="Dust or sandy ground">Dust or sandy ground</option>
          <option value="Animal manure piles (goat or cow)">Animal manure piles (goat or cow)</option>
          <option value="Outside">Outside</option>
        </select>
      </div>
      <div class="fg"><label>Weight (kg)</label><input type="number" id="f-weight" step="0.1" placeholder="e.g. 2.5"/></div>
    </div>
    <div class="modal-footer">
      <button class="btn-lg cancel" onclick="closeModal('modal-chicken')">Cancel</button>
      <button class="btn-lg primary" onclick="saveChicken()">Save Chicken</button>
    </div>
  </div>
</div>