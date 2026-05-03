// assets/js/crud.js — CRUD Operations for Chickens & Farmers

// ----- CHICKEN -----
function openAddChicken() {
  document.getElementById('chicken-modal-title').textContent = 'Add Chicken';
  document.getElementById('edit-chicken-id').value = '';
  ['f-tag', 'f-name', 'f-breed', 'f-weight'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('modal-chicken').classList.add('open');
}

function editChicken(id) {
  const c = chickens.find(x => x.id === id);
  if (!c) return;
  document.getElementById('chicken-modal-title').textContent = 'Edit Chicken';
  document.getElementById('edit-chicken-id').value = id;
  document.getElementById('f-tag').value = c.tag;
  document.getElementById('f-name').value = c.name;
  document.getElementById('f-breed').value = c.breed;
  document.getElementById('f-farmer').value = c.farmer;
  document.getElementById('f-zone').value = c.zone;
  document.getElementById('f-weight').value = c.weight;
  document.getElementById('modal-chicken').classList.add('open');
}

function viewChicken(id) {
  const c = chickens.find(x => x.id === id);
  if (!c) return;
  document.getElementById('view-chicken-body').innerHTML = `
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
      <div style="font-size:48px">${c.emoji}</div>
      <div><div style="font-size:20px;font-weight:700">${c.name}</div><div style="color:var(--text2)">${c.tag}</div></div>
    </div>
    <table style="width:100%;border-collapse:collapse">
      ${[['Breed',c.breed],['Farmer',c.farmer],['Current Zone',c.zone],['Status',c.status],['Weight',c.weight+'kg'],['Moves Today',c.moves]]
        .map(([k,v]) => `<tr><td style="padding:8px 0;color:var(--text2);width:40%">${k}</td><td style="font-weight:600">${v}</td></tr>`)
        .join('')}
    </table>`;
  document.getElementById('modal-view-chicken').classList.add('open');
}

function saveChicken() {
  const eid = document.getElementById('edit-chicken-id').value;
  const data = {
    tag: document.getElementById('f-tag').value,
    name: document.getElementById('f-name').value,
    breed: document.getElementById('f-breed').value,
    farmer: document.getElementById('f-farmer').value,
    zone: document.getElementById('f-zone').value,
    weight: parseFloat(document.getElementById('f-weight').value) || 2.0,
    status: document.getElementById('f-zone').value === 'Outside' ? 'Outside' : 'Inside',
    moves: 0,
    lat: 7.149 + Math.random() * .01,
    lng: 124.859 + Math.random() * .01,
    emoji: emojis[Math.floor(Math.random() * emojis.length)],
  };
  if (!data.tag || !data.name) { alert('Tag and name are required'); return; }
  if (eid) {
    const idx = chickens.findIndex(c => c.id === parseInt(eid));
    if (idx >= 0) chickens[idx] = { ...chickens[idx], ...data };
  } else {
    data.id = nextChickenId++;
    chickens.push(data);
    document.getElementById('stat-total').textContent = chickens.length;
  }
  closeModal('modal-chicken');
  renderAll();
  updateMapMarkers();
}

function deleteChicken(id) {
  if (!confirm('Delete this chicken?')) return;
  chickens = chickens.filter(c => c.id !== id);
  document.getElementById('stat-total').textContent = chickens.length;
  renderAll();
  updateMapMarkers();
}

// ----- FARMER -----
function openAddFarmer() {
  document.getElementById('farmer-modal-title').textContent = 'Add Farmer';
  document.getElementById('edit-farmer-id').value = '';
  ['ff-name', 'ff-user', 'ff-email', 'ff-pass', 'ff-zones'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('modal-farmer').classList.add('open');
}

function editFarmer(id) {
  const f = farmers.find(x => x.id === id);
  if (!f) return;
  document.getElementById('farmer-modal-title').textContent = 'Edit Farmer';
  document.getElementById('edit-farmer-id').value = id;
  document.getElementById('ff-name').value = f.name;
  document.getElementById('ff-user').value = f.username;
  document.getElementById('ff-email').value = f.email;
  document.getElementById('ff-zones').value = f.zones;
  document.getElementById('modal-farmer').classList.add('open');
}

function saveFarmer() {
  const eid = document.getElementById('edit-farmer-id').value;
  const data = {
    name: document.getElementById('ff-name').value,
    username: document.getElementById('ff-user').value,
    email: document.getElementById('ff-email').value,
    zones: document.getElementById('ff-zones').value,
    chickens: 0,
    status: 'Active',
  };
  if (!data.name || !data.username) { alert('Name and username required'); return; }
  if (eid) {
    const idx = farmers.findIndex(f => f.id === parseInt(eid));
    if (idx >= 0) farmers[idx] = { ...farmers[idx], ...data };
  } else {
    data.id = nextFarmerId++;
    farmers.push(data);
  }
  closeModal('modal-farmer');
  renderFarmersTable();
  renderUsersTable();
}

function deleteFarmer(id) {
  if (!confirm('Delete this farmer?')) return;
  farmers = farmers.filter(f => f.id !== id);
  renderFarmersTable();
  renderUsersTable();
}

// ----- MODAL HELPERS -----
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

// Close on backdrop click
document.querySelectorAll('.modal-overlay').forEach(m => {
  m.addEventListener('click', e => {
    if (e.target === m) m.classList.remove('open');
  });
});
