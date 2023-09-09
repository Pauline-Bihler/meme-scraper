import fetch from 'node-fetch';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

const newDirectory = './memes_directory';
try {
  if (!fs.existsSync(newDirectory)) {
    fs.mkdirSync(newDirectory);
  }
} catch (err) {
  console.error(err);
}

// Find a way to access the website and fetch the HTML data (with Cheerio.load)
fetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then((response) => response.text())
  .then((html) => {
    const $ = cheerio.load(html);

    // Find the image elements using Cheerio
    const obtainedImageElements = $('img');

    // Extract image source URLs from the image elements
    const imageSources = obtainedImageElements
      .map((index, element) => {
        return $(element).attr('src');
      })
      .get();

    //Find a way to just download 10 images
    const downloadLimit = 10;
    for (let i = 0; i < Math.min(downloadLimit, imageSources.length); i++) {
      const imageUrl = imageSources[i];
      const imageName = `image_${i + 1}.jpg`;
      const destinationPath = path.join('./memes_directory', imageName);
      downloadImage(imageUrl, destinationPath);
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });

// Function to download an image
function downloadImage(url, destination) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch image');
      }
      return response.buffer();
    })
    .then((buffer) => {
      fs.writeFileSync(destination, buffer);
      console.log(`Downloaded: ${destination}`);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
