const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const REQUIRED_SIZES = [48, 96, 200, 400];
const QUALITY_WEBP = 80;
const QUALITY_AVIF = 70;
const QUALITY_PNG = 80;

// Images to process (relative to public/ directory)
const IMAGES = [
    'raquel.png',
    'maria.png',
    // Add other images here
];

const PUBLIC_DIR = path.join(__dirname, 'public');
const OUTPUT_DIR = path.join(PUBLIC_DIR, 'images');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function optimizeImages() {
    console.log(`Starting image optimization for ${IMAGES.length} files...`);

    for (const imgName of IMAGES) {
        const inputPath = path.join(PUBLIC_DIR, imgName);
        const baseName = path.basename(imgName, path.extname(imgName));

        if (!fs.existsSync(inputPath)) {
            console.warn(`⚠️  Image not found: ${inputPath}`);
            continue;
        }

        console.log(`\n📸 Processing: ${imgName}`);

        for (const size of REQUIRED_SIZES) {
            // 1. Convert to WebP
            const webpPath = path.join(OUTPUT_DIR, `${baseName}-${size}.webp`);
            await sharp(inputPath)
                .resize(size, size, { fit: 'cover' })
                .webp({ quality: QUALITY_WEBP })
                .toFile(webpPath);
            console.log(`   ✅ Generated: ${baseName}-${size}.webp`);

            // 2. Convert to AVIF (Better compression)
            const avifPath = path.join(OUTPUT_DIR, `${baseName}-${size}.avif`);
            await sharp(inputPath)
                .resize(size, size, { fit: 'cover' })
                .avif({ quality: QUALITY_AVIF })
                .toFile(avifPath);
            console.log(`   ✅ Generated: ${baseName}-${size}.avif`);

            // 3. Optimized PNG (Fallback)
            const pngPath = path.join(OUTPUT_DIR, `${baseName}-${size}.png`);
            await sharp(inputPath)
                .resize(size, size, { fit: 'cover' })
                .png({ quality: QUALITY_PNG, compressionLevel: 9 })
                .toFile(pngPath);
            console.log(`   ✅ Generated: ${baseName}-${size}.png`);
        }
    }
    console.log('\n✨ Optimization Complete! Images saved to public/images/');
}

optimizeImages().catch(err => {
    console.error('❌ Error optimizing images:', err);
    console.log('💡 Tip: Make sure you have installed sharp: npm install sharp');
});
