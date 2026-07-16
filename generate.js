const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const files = [
  'logo-square-light',
  'logo-square-dark',
  'logo-horizontal-light',
  'logo-horizontal-dark',
  'favicon'
];

async function generate() {
  for (const file of files) {
    const svgPath = path.join(__dirname, `${file}.svg`);
    const pngPath = path.join(__dirname, `${file}.png`);
    if (fs.existsSync(svgPath)) {
      console.log(`Converting ${file}.svg to PNG...`);
      if (file === 'favicon') {
        await sharp(svgPath).resize(64, 64).png().toFile(path.join(__dirname, `favicon-64.png`));
        await sharp(svgPath).resize(512, 512).png().toFile(pngPath);
      } else {
        await sharp(svgPath).png().toFile(pngPath);
      }
    }
  }
  console.log("Done!");
}

generate().catch(console.error);
