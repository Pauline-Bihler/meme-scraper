## Node.js Meme Scraper

These application scrapes and parses html to let you download 10 images from this website.
https://memegen-link-examples-upleveled.netlify.app/
You should see 10 images being downloaded in the command line whenever you run node index.js.

## Steps to solve the task

- [x] Create a new repo on Github
- [x] Create an index.js
- [x] Figure out which library to use
- [x] Import the libraries (Cheerio, Node-fetch, fs, node:path)
- [x] Find a way to make a new directory
- [x] Find a way to access the website
- [x] Use a tool that allows you to traverse the html by understanding its content and filter the information. Research for the tool and learn how to use it.
- [x] Find a way to download images
- [x] Find a way to just download 10 images
- [x] Find a way to transfer those 10 images to the memes folder.
- [x] Try and test if it works.
- [x] Export to replit

Resources used:
Google

Libraries:
Node-fetch - https://www.npmjs.com/package/node-fetch?activeTab=readme
Cheerio - https://cheerio.js.org/docs/intro

Creating a new directory:
https://www.geeksforgeeks.org/node-js-fs-existssync-method/
https://www.geeksforgeeks.org/node-js-fs-mkdir-method/
https://www.tabnine.com/code/javascript/functions/fs/existsSync

Finding a way to access the data, Filtering the data:
https://stackabuse.com/making-http-requests-in-node-js-with-node-fetch/
https://blog.logrocket.com/parsing-html-nodejs-cheerio/

Downloading an image, Downloading only 10 images:
https://nodejs.org/docs/latest/api/fs.html
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min

Naming the image 01 - 10.jpg (Padding a number):
https://stackoverflow.com/questions/10073699/pad-a-number-with-leading-zeros-in-javascript

Solving Cheerio and buffer being deprecated:
https://javascript.plainenglish.io/how-to-deal-with-cheerios-load-function-deprecation-a6401da930d1
https://github.com/serverless/serverless/issues/5394
https://nodejs.org/docs/latest/api/buffer.html#static-method-bufferfromarraybuffer-byteoffset-length
