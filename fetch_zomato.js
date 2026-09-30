const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://www.zomato.com/hyderabad/mandi-bistro-madhapur/photos';
const outputDir = 'C:\\Users\\haris\\.gemini\\antigravity\\scratch\\mandi-bistro\\public\\images';

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
  }
};

https.get(url, options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('C:\\Users\\haris\\.gemini\\antigravity\\scratch\\mandi-bistro\\zomato_photos.html', data);
    console.log('Fetched Zomato photos page. Length:', data.length);
    
    // Extract image URLs
    const regex = /https:\/\/b\.zmtcdn\.com\/data\/[a-zA-Z0-9_/.]+/g;
    const matches = Array.from(new Set(data.match(regex) || []));
    console.log('Found image URLs:', matches.length);
    fs.writeFileSync('C:\\Users\\haris\\.gemini\\antigravity\\scratch\\mandi-bistro\\zomato_images.json', JSON.stringify(matches, null, 2));
  });
}).on('error', (err) => {
  console.error('Error fetching:', err);
});
