const fs = require('fs');
const path = require('path');

// Read the Cloudinary URLs
const cloudinaryUrls = JSON.parse(fs.readFileSync('cloudinary-urls.json', 'utf8'));

// Create a mapping of filenames to Cloudinary URLs
const cloudinaryMap = {};
cloudinaryUrls.forEach(img => {
  cloudinaryMap[img.originalName] = img.cloudinaryUrl;
});

// Read the gallery page
const galleryPath = 'app/gallery/page.tsx';
let galleryContent = fs.readFileSync(galleryPath, 'utf8');

// Function to update image sources
function updateImageSources() {
  let updatedCount = 0;
  
  // Find all image src patterns in the gallery items
  const srcPattern = /src:\s*['"`]\/images\/([^'"`]+)['"`]/g;
  
  galleryContent = galleryContent.replace(srcPattern, (match, filename) => {
    if (cloudinaryMap[filename]) {
      updatedCount++;
      return `src: '${cloudinaryMap[filename]}'`;
    } else {
      // Use optimized local image for files not in Cloudinary
      return `src: '/images/optimized/${filename}'`;
    }
  });
  
  console.log(`✅ Updated ${updatedCount} image sources`);
  return updatedCount;
}

// Update the sources
const updatedCount = updateImageSources();

// Write the updated content back
fs.writeFileSync(galleryPath, galleryContent);

console.log('\n🎉 Gallery sources updated successfully!');
console.log(`📊 Cloudinary images: ${Object.keys(cloudinaryMap).length}`);
console.log(`📊 Total updates: ${updatedCount}`);
console.log(`📁 File updated: ${galleryPath}`);

// Show some examples
console.log('\n📸 Example updated sources:');
const examples = Object.keys(cloudinaryMap).slice(0, 3);
examples.forEach(filename => {
  console.log(`${filename}: ${cloudinaryMap[filename]}`);
});
