const fs = require('fs');
const path = require('path');

const offlineDir = path.join(__dirname, 'offline');
const files = fs.readdirSync(offlineDir);

// Filter for HTML game files only
const gameFiles = files.filter(file => file.endsWith('.html') && file !== 'index.html');

// Save the list into a clean JSON data file inside the offline folder
fs.writeFileSync(
    path.join(offlineDir, 'games-list.json'),
    JSON.stringify(gameFiles, null, 2)
);

console.log(`✅ Successfully indexed ${gameFiles.length} games!`);
