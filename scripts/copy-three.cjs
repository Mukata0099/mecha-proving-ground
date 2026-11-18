const fs = require('fs');
const path = require('path');
const source = path.join(__dirname, '..', 'node_modules', 'three', 'build', 'three.min.js');
const targetDir = path.join(__dirname, '..', 'public', 'vendor');
const target = path.join(targetDir, 'three.min.js');
if (!fs.existsSync(source)) {
  console.error('Three.js dependency not found. Run npm install first.');
  process.exit(1);
}
fs.mkdirSync(targetDir, { recursive: true });
fs.copyFileSync(source, target);
console.log('Copied Three.js locally for offline app use.');
