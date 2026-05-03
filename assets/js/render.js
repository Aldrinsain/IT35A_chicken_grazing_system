// assets/js/render.js — Table & List Rendering Functions

function renderAll() {
  renderMovementsBody();
  renderChickensTable();
  renderFarmersTable();
  renderMovementsTable();
  renderUsersTable();
}

function chickenRow(c, full = false) {
  const ZONE_CLASS = {'Soft soil':'z-A','Piles of leaves (dry or wet)':'z-B','Kitchen waste or scraps area':'z-C','Dust or sandy ground':'z-D','Animal manure piles (goat or cow)':'z-E'};
  const z = c.zone === 'Outside' ? 'z-Out' : (ZONE_CLASS[c.zone] || 'z-A');
  const sb = c.status === 'Outside' ? 'badge-red' : c.status === 'Moving' ? 'badge-blue' : 'badge-green';
  return `<tr>
    <td><div class="chicken-img">${c.emoji}</div></td>
    <td><span class="tag">${c.tag}</span></td>
    <td>${c.name}</td>
    ${full ? `<td>${c.breed}</td><td>${c.farmer}</td>` : ''}
    <td><span class="zone-pill ${z}">${c.zone}</span></td>
    ${full
      ? `<td><span class="badge ${sb}">${c.status}</span></td><td>${c.weight}</td>
         <td style="display:flex;gap:5px">
           <button class="btn-sm btn-primary" onclick="viewChicken(${c.id})">View</button>
           <button class="btn-sm btn-outline" onclick="editChicken(${c.id})">Edit</button>
           <button class="btn-sm btn-danger" onclick="deleteChicken(${c.id})">Del</button>
         </td>`
      : `<td><span class="badge ${sb}">${c.status}</span></td><td>${c.moves}</td>
         <td><button class="btn-sm btn-primary" onclick="viewChicken(${c.id})">History</button></td>`}
  </tr>`;
}

function renderMovementsBody() {
  const tbody = document.getElementById('movements-tbody');
  if (!tbody) return;
  tbody.innerHTML = chickens.slice(0, 6).map(c => chickenRow(c, false)).join('');
}

function renderChickensTable() {
  const tbody = document.getElementById('chickens-tbody');
  if (!tbody) return;
  tbody.innerHTML = chickens.map(c => chickenRow(c, true)).join('');
}

function renderMyChickens() {
  const tbody = document.getElementById('my-chickens-tbody');
  if (!tbody) return;
  const mine = chickens.filter(c => c.farmer === 'Juan Dela Cruz');
  tbody.innerHTML = mine.map(c => `<tr>
    <td><span class="tag">${c.tag}</span></td>
    <td>${c.name}</td><td>${c.breed}</td>
    <td><span class="zone-pill ${c.zone === 'Outside' ? 'z-Out' : ({'Soft soil':'z-A','Piles of leaves (dry or wet)':'z-B','Kitchen waste or scraps area':'z-C','Dust or sandy ground':'z-D','Animal manure piles (goat or cow)':'z-E'}[c.zone] || 'z-A')}">${c.zone}</span></td>
    <td><span class="badge ${c.status === 'Outside' ? 'badge-red' : c.status === 'Moving' ? 'badge-blue' : 'badge-green'}">${c.status}</span></td>
    <td><button class="btn-sm btn-outline" onclick="editChicken(${c.id})">Edit</button></td>
  </tr>`).join('');
}

function renderFarmersTable() {
  const tbody = document.getElementById('farmers-tbody');
  if (!tbody) return;
  tbody.innerHTML = farmers.map(f => `<tr>
    <td><div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--purple));
      display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;font-size:14px">${f.name[0]}</div></td>
    <td>${f.name}</td><td>${f.username}</td><td>${f.email}</td>
    <td>${f.chickens}</td><td>${f.zones}</td>
    <td><span class="badge badge-green">${f.status}</span></td>
    <td style="display:flex;gap:5px">
      <button class="btn-sm btn-outline" onclick="editFarmer(${f.id})">Edit</button>
      <button class="btn-sm btn-danger" onclick="deleteFarmer(${f.id})">Del</button>
    </td>
  </tr>`).join('');
}

function renderMovementsTable() {
  const tbody = document.getElementById('full-movements-tbody');
  if (!tbody) return;
  const el = document.getElementById('move-count');
  if (el) el.textContent = movements.length + ' records';
  tbody.innerHTML = movements.map(m => `<tr>
    <td><span class="tag">${m.tag}</span></td>
    <td><span class="zone-pill ${m.from === 'Outside' ? 'z-Out' : ({'Soft soil':'z-A','Piles of leaves (dry or wet)':'z-B','Kitchen waste or scraps area':'z-C','Dust or sandy ground':'z-D','Animal manure piles (goat or cow)':'z-E'}[m.from] || 'z-A')}">${m.from}</span></td>
    <td><span class="zone-pill ${m.to === 'Outside' ? 'z-Out' : ({'Soft soil':'z-A','Piles of leaves (dry or wet)':'z-B','Kitchen waste or scraps area':'z-C','Dust or sandy ground':'z-D','Animal manure piles (goat or cow)':'z-E'}[m.to] || 'z-A')}">${m.to}</span></td>
    <td>${m.time}</td>
    <td><span class="badge ${m.status === 'Outside' ? 'badge-red' : m.status === 'Moving' ? 'badge-blue' : 'badge-green'}">${m.status}</span></td>
    <td>${m.duration}</td>
  </tr>`).join('');
}

function renderUsersTable() {
  const tbody = document.getElementById('users-tbody');
  if (!tbody) return;
  const all = [
    { id: 0, name: 'Administrator', role: 'Admin', username: 'admin', status: 'Active' },
    ...farmers.map(f => ({ id: f.id, name: f.name, role: 'Farmer', username: f.username, status: f.status }))
  ];
  tbody.innerHTML = all.map(u => `<tr>
    <td><div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,${u.role === 'Admin' ? 'var(--red),var(--orange)' : 'var(--blue),var(--purple)'});
      display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;font-size:14px">${u.name[0]}</div></td>
    <td>${u.name}</td>
    <td><span class="badge ${u.role === 'Admin' ? 'badge-red' : 'badge-blue'}">${u.role}</span></td>
    <td>${u.username}</td>
    <td><span class="badge badge-green">${u.status}</span></td>
    <td style="display:flex;gap:5px">
      ${u.id > 0
        ? `<button class="btn-sm btn-outline" onclick="editFarmer(${u.id})">Edit</button>
           <button class="btn-sm btn-danger" onclick="deleteFarmer(${u.id})">Del</button>`
        : '<span style="color:var(--text2);font-size:12px">Protected</span>'}
    </td>
  </tr>`).join('');
}

function renderFullAlerts() {
  const el = document.getElementById('full-alerts-list');
  if (!el) return;
  document.getElementById('total-alert-badge').textContent = alertMessages.length + ' Active';
  el.innerHTML = alertMessages.map(a => `<div class="alert-item" style="padding:12px 18px">
    <div class="alert-dot" style="background:var(--${a.type})"></div>
    <div><div class="a-text">${a.msg}</div><div class="a-time">${a.time}</div></div>
    <span class="badge ${a.type === 'red' ? 'badge-red' : a.type === 'orange' ? 'badge-orange' : 'badge-blue'}" style="margin-left:auto">
      ${a.type === 'red' ? 'Critical' : a.type === 'orange' ? 'Warning' : 'Info'}
    </span>
  </div>`).join('');
}

function renderFarmerTable() {
  const tbody = document.getElementById('farmer-table-tbody');
  if (!tbody) return;
  const mine = chickens.filter(c => c.farmer === 'Juan Dela Cruz');
  tbody.innerHTML = mine.map(c => `<tr>
    <td><span class="tag">${c.tag}</span></td>
    <td><span class="zone-pill ${c.zone === 'Outside' ? 'z-Out' : ({'Soft soil':'z-A','Piles of leaves (dry or wet)':'z-B','Kitchen waste or scraps area':'z-C','Dust or sandy ground':'z-D','Animal manure piles (goat or cow)':'z-E'}[c.zone] || 'z-A')}">${c.zone}</span></td>
    <td><span class="badge ${c.status === 'Outside' ? 'badge-red' : c.status === 'Moving' ? 'badge-blue' : 'badge-green'}">${c.status}</span></td>
    <td>${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</td>
    <td>${Math.floor(Math.random() * 3) + 1}h ${Math.floor(Math.random() * 60)}m</td>
  </tr>`).join('');
}

function renderFarmerNotifications() {
  const el = document.getElementById('farmer-notif-list');
  if (!el) return;
  el.innerHTML = alertMessages.slice(0, 4).map(a => `<div class="alert-item">
    <div class="alert-dot" style="background:var(--${a.type})"></div>
    <div><div class="a-text">${a.msg}</div><div class="a-time">${a.time}</div></div>
  </div>`).join('');
}
