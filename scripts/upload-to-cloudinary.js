const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const inputDir = 'public/images';
const outputFile = 'cloudinary-urls.json';

async function uploadImages() {
  const files = fs.readdirSync(inputDir).filter(file => 
    file.match(/\.(jpg|jpeg|png)$/i) && !file.includes('optimized')
  );

  console.log(`Found ${files.length} images to upload to Cloudinary...`);
  
  const uploadedImages = [];
  let successCount = 0;
  let errorCount = 0;

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    
    try {
      console.log(`📤 Uploading: ${file}`);
      
      const result = await cloudinary.uploader.upload(inputPath, {
        folder: 'vesalvisuals',
        public_id: path.parse(file).name,
        overwrite: true,
        resource_type: 'image',
        // No transformations - preserve original image exactly as is
        eager: [],
        eager_async: false
      });
      
      uploadedImages.push({
        originalName: file,
        cloudinaryUrl: result.secure_url,
        publicId: result.public_id,
        width: result.width,
        height: result.height,
        format: result.format,
        size: result.bytes
      });
      
      successCount++;
      console.log(`✅ Uploaded: ${file} -> ${result.secure_url}`);
      
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
      
    } catch (error) {
      errorCount++;
      console.error(`❌ Error uploading ${file}:`, error.message);
    }
  }
  
  // Save results to JSON file
  fs.writeFileSync(outputFile, JSON.stringify(uploadedImages, null, 2));
  
  console.log('\n🎉 Upload Complete!');
  console.log(`✅ Successfully uploaded: ${successCount} images`);
  console.log(`❌ Failed uploads: ${errorCount} images`);
  console.log(`📁 Results saved to: ${outputFile}`);
  console.log(`🌐 Cloudinary folder: vesalvisuals`);
  
  // Show some example URLs
  if (uploadedImages.length > 0) {
    console.log('\n📸 Example Cloudinary URLs:');
    uploadedImages.slice(0, 3).forEach(img => {
      console.log(`${img.originalName}: ${img.cloudinaryUrl}`);
    });
  }
}

uploadImages().catch(console.error);
