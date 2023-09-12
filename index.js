import fetch from 'node-fetch';
import { load } from 'cheerio'; // Import 'load' function from 'cheerio'
import fs from 'node:fs';
import path from 'node:path';

// Find a way to make a new directory
const newDirectory = './memes';
const findNewDirectory = () => {
  try {
    if (!fs.existsSync(newDirectory)) {
      fs.mkdirSync(newDirectory);
    }
  } catch (err) {
    console.error(err);
  }
};

// Find a way to access the website and fetch the HTML data (without Cheerio.load)
fetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then((response) => response.text())
  .then((html) => {
    const $ = load(html); // Use the 'load' function to load the HTML

    // Find the image elements using Cheerio
    const obtainedImageElements = $('img');

    // Extract image source URLs from the image elements
    const imageSources = obtainedImageElements
      .map((index, element) => {
        return $(element).attr('src');
      })
      .get();

    // Function to download an image
    function downloadImage(url, destination) {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch image');
          }
          return response.arrayBuffer();
        })
        .then((buffer) => {
          fs.writeFileSync(destination, Buffer.from(buffer));
          console.log(`Downloaded: ${destination}`);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

    // Find a way to just download 10 images
    const downloadLimit = 10;
    for (let i = 0; i < Math.min(downloadLimit, imageSources.length); i++) {
      const imageUrl = imageSources[i];

      const paddedNumber = String(i + 1).padStart(2, '0');
      const imageName = `${paddedNumber}.jpg`;

      findNewDirectory();
      const destinationPath = path.join('./memes', imageName);
      downloadImage(imageUrl, destinationPath);
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
