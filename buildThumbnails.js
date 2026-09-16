
const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');

/**
 * target aspect-ratio 2 / 3
 * 
 * File Structure
 * - public
 *   - photography
 *     - album-name
 *       - cover.JPG
 *       - cover_THuMBNAIL.JPG
 *       - DSC00000.JPG
 *       - DSC00000_THUMBNAIL.JPG
 */

const height = 400;
const width = 600;
const coverHeight = 900;
const coverWidth = 1200;

// REPLACE ME
const targetAlbum = '';

const basePath = `./public/photography/${targetAlbum}`;

const inDirPath = path.resolve(basePath);
const outDirPath = path.resolve(basePath);

const allowedExtensions = ['.jpg', '.JPG'];

const files = fs.readdirSync(inDirPath).filter((item) => {
  const extension = path.extname(item);
  return allowedExtensions.includes(extension);
});

files.forEach(async (file) => {
  const originalFilePath = path.join(inDirPath, file);
  const imageToResizeBuffer = fs.readFileSync(originalFilePath);
  const fileName = path.parse(file).name;

  const isCover = fileName === 'cover';

  const resized = await sharp(imageToResizeBuffer).resize(
    isCover ? coverWidth : width,
    isCover ? coverHeight : height,
    { fit: 'contain' }
  ).toBuffer();

  const newFileName = `${fileName}_THUMBNAIL.JPG`;
  const exportPath = path.join(outDirPath, newFileName);

  fs.writeFileSync(exportPath, resized);
});
