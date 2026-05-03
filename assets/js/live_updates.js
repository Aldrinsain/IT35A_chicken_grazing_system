// assets/js/live_updates.js — Real-time Simulation (every 4s)

function startLiveUpdates() {
  setInterval(() => {
    const zones = ['Soft soil','Piles of leaves (dry or wet)','Kitchen waste or scraps area','Dust or sandy ground','Animal manure piles (goat or cow)'];

    chickens.forEach(c => {
      if (Math.random() < .15) {
        // Move position slightly
        c.lat += (Math.random() - .5) * 0.001;
        c.lng += (Math.random() - .5) * 0.001;

        // Zone change — only 2% chance to go Outside (was 10%)
        if (Math.random() < .02) {
          // Only allow 1 chicken Outside at a time
          const alreadyOutside = chickens.filter(x => x.status === 'Outside').length;
          if (alreadyOutside < 1) {
            c.zone = 'Outside';
          } else {
            // If already 1 outside, just move to a normal zone
            c.zone = zones[Math.floor(Math.random() * zones.length)];
          }
        } else if (c.zone === 'Outside' && Math.random() < .3) {
          // Outside chickens have 30% chance to come back inside each tick
          c.zone = zones[Math.floor(Math.random() * zones.length)];
        } else if (Math.random() < .05) {
          // 5% chance to move to a different inside zone
          c.zone = zones[Math.floor(Math.random() * zones.length)];
        }

        // Update status based on zone
        c.status = c.zone === 'Outside' ? 'Outside' : Math.random() < .15 ? 'Moving' : 'Inside';
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
    if (document.getElementById('section-dashboard') &&
        document.getElementById('section-dashboard').classList.contains('active')) {
      renderMovementsBody();
    }

  }, 4000);
}