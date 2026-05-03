// assets/js/live_updates.js — Real-time Simulation (every 4s)

function startLiveUpdates() {
  setInterval(() => {
    // Randomly move some chickens
    chickens.forEach(c => {
      if (Math.random() < .15) {
        c.lat += (Math.random() - .5) * .001;
        c.lng += (Math.random() - .5) * .001;
        const zones = ['Soft soil','Piles of leaves (dry or wet)','Kitchen waste or scraps area','Dust or sandy ground','Animal manure piles (goat or cow)','Outside'];
        if (Math.random() < .1) c.zone = zones[Math.floor(Math.random() * zones.length)];
        c.status = c.zone === 'Outside' ? 'Outside' : Math.random() < .2 ? 'Moving' : 'Inside';
        c.moves++;
      }
    });

    // Update admin map markers
    adminMarkers.forEach(m => {
      const c = chickens.find(x => x.id === m.id);
      if (c) {
        m.marker.setLatLng([c.lat, c.lng]);
        m.marker.setIcon(makeIcon(markerColor(c)));
      }
    });

    // Update farmer map markers
    farmerMarkers.forEach(m => {
      const c = chickens.find(x => x.id === m.id);
      if (c) {
        m.marker.setLatLng([c.lat, c.lng]);
        m.marker.setIcon(makeIcon(markerColor(c)));
      }
    });

    // Update stat counters
    const outside = chickens.filter(c => c.status === 'Outside').length;
    const totalMoves = chickens.reduce((s, c) => s + c.moves, 0);
    const statO = document.getElementById('stat-outside');
    const statM = document.getElementById('stat-moves');
    if (statO) statO.textContent = outside;
    if (statM) statM.textContent = totalMoves;

    // Refresh dashboard movements table if visible
    if (document.getElementById('section-dashboard').classList.contains('active')) {
      renderMovementsBody();
    }

    
  }, 4000);
}
