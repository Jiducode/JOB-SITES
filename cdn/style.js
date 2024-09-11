// Create a new <script> element
const script = document.createElement('script');

// Set the 'src' attribute to the CDN URL
script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';

// Optionally set the 'type' attribute to 'module' if you're using an ES module
// script.type = 'module';

// Append the <script> element to the <head> or <body> of the document
document.head.appendChild(script);

// If you need to load the ES module version, you can do so as well
// const moduleScript = document.createElement('script');
// moduleScript.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
// moduleScript.type = 'module';
// document.head.appendChild(moduleScript);
