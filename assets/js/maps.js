// assets/js/maps.js — Leaflet Map Initialization & Marker Management

let adminMap = null, farmerMap = null, farmerMapFull = null, adminMapFull = null;
let adminMarkers = [], farmerMarkers = [];

// ── Zone definitions ───────────────────────────────────────────────────────
const ZONES = [
  { name: 'Soft soil',                        color: '#3b82f6', coords: [[8.3700,124.8638],[8.3705,124.8638],[8.3705,124.8648],[8.3700,124.8648]], center: [8.37025, 124.8643] },
  { name: 'Piles of leaves (dry or wet)',      color: '#22c55e', coords: [[8.3693,124.8638],[8.3700,124.8638],[8.3700,124.8648],[8.3693,124.8648]], center: [8.36965, 124.8643] },
  { name: 'Kitchen waste or scraps area',      color: '#f97316', coords: [[8.3686,124.8648],[8.3693,124.8648],[8.3693,124.8658],[8.3686,124.8658]], center: [8.36895, 124.8653] },
  { name: 'Dust or sandy ground',              color: '#8b5cf6', coords: [[8.3693,124.8648],[8.3700,124.8648],[8.3700,124.8658],[8.3693,124.8658]], center: [8.36965, 124.8653] },
  { name: 'Animal manure piles (goat or cow)', color: '#ef4444', coords: [[8.3700,124.8648],[8.3705,124.8648],[8.3705,124.8658],[8.3700,124.8658]], center: [8.37025, 124.8653] },
];

// Overall boundary center (used for "just outside" spawning)
const BOUNDARY_CENTER = [8.3697, 124.8648];
const BOUNDARY_EDGE   = 0.0008; // ~80m from center — just outside, not far

function spawnInsideZone(zone) {
  return [
    zone.center[0] + (Math.random() - 0.5) * 0.0003,
    zone.center[1] + (Math.random() - 0.5) * 0.0003
  ];
}

// Spawn just slightly outside the boundary edge — not far
function spawnJustOutside() {
  const angle = Math.random() * 2 * Math.PI;
  const dist  = BOUNDARY_EDGE + Math.random() * 0.0003; // only 0-30m past edge
  return [
    BOUNDARY_CENTER[0] + dist * Math.cos(angle),
    BOUNDARY_CENTER[1] + dist * Math.sin(angle)
  ];
}

function getZone(name) {
  return ZONES.find(z => z.name === name) || ZONES[Math.floor(Math.random() * ZONES.length)];
}

function makeIcon(color) {
  return L.divIcon({
    html: `<div style="width:28px;height:28px;border-radius:50%;background:${color};border:3px solid #fff;
      box-shadow:0 2px 6px rgba(0,0,0,.3);display:flex;align-items:center;justify-content:center;font-size:13px">🐔</div>`,
    iconSize: [28, 28], iconAnchor: [14, 14], className: ''
  });
}

function markerColor(c) {
  return c.status === 'Outside' ? '#ef4444' : c.status === 'Moving' ? '#3b82f6' : '#22c55e';
}

function initAdminMap() {
  if (adminMap) return;
  const el = document.getElementById('admin-map');
  if (!el) return;
  adminMap = L.map('admin-map', { zoomControl: true }).setView([8.3697, 124.8648], 16);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(adminMap);
  addZonePolygons(adminMap);
  adminMarkers = [];
  chickens.forEach(c => {
    const pos = c.status === 'Outside' ? spawnJustOutside() : spawnInsideZone(getZone(c.zone));
    c.lat = pos[0]; c.lng = pos[1];
    const m = L.marker([c.lat, c.lng], { icon: makeIcon(markerColor(c)) }).addTo(adminMap)
      .bindPopup(`<b>${c.name}</b> (${c.tag})<br>Zone: ${c.zone}<br>Status: ${c.status}`);
    adminMarkers.push({ id: c.id, marker: m });
  });
}

function initFarmerMap() {
  if (farmerMap) return;
  const el = document.getElementById('farmer-map-div');
  if (!el) return;
  farmerMap = L.map('farmer-map-div', { zoomControl: true }).setView([8.3697, 124.8648], 16);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(farmerMap);
  addZonePolygons(farmerMap);
  farmerMarkers = [];
  chickens.forEach(c => {
    const pos = c.status === 'Outside' ? spawnJustOutside() : spawnInsideZone(getZone(c.zone));
    c.lat = pos[0]; c.lng = pos[1];
    const m = L.marker([c.lat, c.lng], { icon: makeIcon(markerColor(c)) }).addTo(farmerMap)
      .bindPopup(`<b>${c.name}</b> (${c.tag})<br>Zone: ${c.zone}`);
    farmerMarkers.push({ id: c.id, marker: m });
  });
}

function initAdminMapFull() {
  if (adminMapFull) return;
  adminMapFull = L.map('admin-map-full').setView([8.3697, 124.8648], 16);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(adminMapFull);
  addZonePolygons(adminMapFull);
  chickens.forEach(c => {
    const pos = c.status === 'Outside' ? spawnJustOutside() : spawnInsideZone(getZone(c.zone));
    L.marker([pos[0], pos[1]], { icon: makeIcon(markerColor(c)) }).addTo(adminMapFull)
      .bindPopup(`<b>${c.name}</b> (${c.tag})<br>Zone: ${c.zone}<br>Status: ${c.status}`);
  });
}

function initFarmerMapFull() {
  if (farmerMapFull) return;
  farmerMapFull = L.map('farmer-map-full').setView([8.3697, 124.8648], 16);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(farmerMapFull);
  addZonePolygons(farmerMapFull);
  chickens.forEach(c => {
    const pos = c.status === 'Outside' ? spawnJustOutside() : spawnInsideZone(getZone(c.zone));
    L.marker([pos[0], pos[1]], { icon: makeIcon(markerColor(c)) }).addTo(farmerMapFull)
      .bindPopup(`<b>${c.name}</b> (${c.tag})<br>Zone: ${c.zone}`);
  });
}

function addZonePolygons(map) {
  ZONES.forEach(z => {
    L.polygon(z.coords, { color: z.color, fillColor: z.color, fillOpacity: .2, weight: 2 })
      .addTo(map)
      .bindPopup(`<b>${z.name}</b>`);
  });
}

function updateMapMarkers() {
  adminMarkers.forEach(m => {
    const c = chickens.find(x => x.id === m.id);
    if (c) {
      if (c.status === 'Outside') {
        // Stay just near the edge — slowly drift back
        const pos = spawnJustOutside();
        c.lat = pos[0]; c.lng = pos[1];
      } else {
        // Move inside their zone
        const zone = getZone(c.zone);
        const pos = spawnInsideZone(zone);
        c.lat = pos[0]; c.lng = pos[1];
      }
      m.marker.setLatLng([c.lat, c.lng]);
      m.marker.setIcon(makeIcon(markerColor(c)));
    }
  });
  farmerMarkers.forEach(m => {
    const c = chickens.find(x => x.id === m.id);
    if (c) {
      if (c.status === 'Outside') {
        const pos = spawnJustOutside();
        c.lat = pos[0]; c.lng = pos[1];
      } else {
        const zone = getZone(c.zone);
        const pos = spawnInsideZone(zone);
        c.lat = pos[0]; c.lng = pos[1];
      }
      m.marker.setLatLng([c.lat, c.lng]);
      m.marker.setIcon(makeIcon(markerColor(c)));
    }
  });
}