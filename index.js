import fetch from 'node-fetch';
import { load } from 'cheerio'; // Import 'load' function from 'cheerio'
import fs from 'fs';
import path from 'path';

// Function to create a new directory if it doesn't exist
const createDirectoryIfNotExists = (directory) => {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }
};

// Function to download an image
const downloadImage = (url, destination) => {
  return fetch(url)
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
};

// Check if the "memes" directory exists or create it
const newDirectory = './memes';
createDirectoryIfNotExists(newDirectory);

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

    // Find a way to just download 10 images
    const downloadLimit = 10;
    for (let i = 0; i < Math.min(downloadLimit, imageSources.length); i++) {
      const imageUrl = imageSources[i];

      const paddedNumber = String(i + 1).padStart(2, '0');
      const imageName = `${paddedNumber}.jpg`;

      const destinationPath = path.join(newDirectory, imageName);
      downloadImage(imageUrl, destinationPath);
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
