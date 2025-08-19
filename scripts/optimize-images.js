const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'public/images';
const outputDir = 'public/images/optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImages() {
  const files = fs.readdirSync(inputDir).filter(file => 
    file.match(/\.(jpg|jpeg|png)$/i)
  );

  console.log(`Found ${files.length} images to optimize...`);

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    
    try {
      await sharp(inputPath)
        .resize(800, 800, { 
          fit: 'inside',
          withoutEnlargement: true 
        })
        .jpeg({ 
          quality: 80,
          progressive: true 
        })
        .toFile(outputPath);
      
      console.log(`✅ Optimized: ${file}`);
    } catch (error) {
      console.error(`❌ Error optimizing ${file}:`, error.message);
    }
  }
  
  console.log('🎉 Image optimization complete!');
}

optimizeImages();
