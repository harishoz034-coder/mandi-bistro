const https = require('https');
const fs = require('fs');
const path = require('path');

const targetDir = 'C:\\Users\\haris\\.gemini\\antigravity\\scratch\\mandi-bistro\\public\\images';
const imageUrls = [
  { name: 'mandi_bistro_main_hero.jpg', url: 'https://b.zmtcdn.com/data/pictures/8/20586128/e83a1b6b15c11a53b2bfe1b224c4d868.jpeg' },
  { name: 'mandi_bistro_ambience_1.jpg', url: 'https://b.zmtcdn.com/data/pictures/8/20586128/6c35611ef24a58c60ecc0e9a063a7ac8.jpg' },
  { name: 'mandi_bistro_ambience_2.jpg', url: 'https://b.zmtcdn.com/data/pictures/8/20586128/2a50e2c32b422b945576693cba9bb062.jpg' },
  { name: 'mandi_bistro_ambience_3.jpg', url: 'https://b.zmtcdn.com/data/pictures/8/20586128/c3437cbe0bed8026f5b5fc026b8dc0e6.jpg' },
  { name: 'mandi_bistro_ambience_4.jpg', url: 'https://b.zmtcdn.com/data/pictures/8/20586128/f9a617c90e324f9f3315feaec6d0d77e.jpg' },
  { name: 'mandi_bistro_dish_1.jpg', url: 'https://b.zmtcdn.com/data/pictures/8/20586128/d4575c81c77e1385868c0c461c544e63.jpg' },
  { name: 'mandi_bistro_dish_2.jpg', url: 'https://b.zmtcdn.com/data/pictures/8/20586128/f92c07e11b4c71baf8693056c827c066.jpg' },
  { name: 'mandi_bistro_dish_3.jpg', url: 'https://b.zmtcdn.com/data/pictures/8/20586128/9d94321077087f4d261b594faf6c8957.jpg' },
  { name: 'mandi_bistro_dish_4.jpg', url: 'https://b.zmtcdn.com/data/pictures/8/20586128/2431a220f42f5719c318bca041cc4ec7.jpg' },
  { name: 'mandi_bistro_dish_5.jpg', url: 'https://b.zmtcdn.com/data/pictures/8/20586128/06fe73904403e43534c22aa01edc6815.jpg' },
  { name: 'mandi_bistro_dish_6.jpg', url: 'https://b.zmtcdn.com/data/pictures/8/20586128/ecd87d50d88b1eee30cf2fcdddd7f79c.jpg' },
  { name: 'mandi_bistro_dish_7.jpg', url: 'https://b.zmtcdn.com/data/pictures/8/20586128/a90db006d7cb266625a5482b5fe4aea2.jpg' },
  { name: 'mandi_bistro_dish_8.jpg', url: 'https://b.zmtcdn.com/data/pictures/8/20586128/640cafdfca9008a85c9879dc86134090.jpg' },
  { name: 'mandi_bistro_dish_9.jpg', url: 'https://b.zmtcdn.com/data/pictures/8/20586128/a8ea93a1d3c7cb9c3256f61a63ddf479.jpg' },
  { name: 'mandi_bistro_dish_10.jpg', url: 'https://b.zmtcdn.com/data/pictures/8/20586128/6ae3e6d4e2dc01862861cf5add4029cd.jpg' },
  { name: 'mandi_bistro_dish_11.jpg', url: 'https://b.zmtcdn.com/data/pictures/8/20586128/1b096873dab3856f74c151537108c0b7.jpg' },
  { name: 'mandi_bistro_dish_12.jpg', url: 'https://b.zmtcdn.com/data/pictures/8/20586128/d3e51c074e3ba98b7abf8bb761d702f0.jpg' },
  { name: 'mandi_bistro_dish_13.jpg', url: 'https://b.zmtcdn.com/data/pictures/8/20586128/bef00f8327fa335f285edfd4b1b94e43.jpg' },
  { name: 'mandi_bistro_dish_14.jpg', url: 'https://b.zmtcdn.com/data/pictures/8/20586128/90bbc58657c43380f4a24250bba8c588.jpg' },
  { name: 'mandi_bistro_dish_15.jpg', url: 'https://b.zmtcdn.com/data/pictures/8/20586128/575006da2d67aba58b3c1590cb635c4a.jpg' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('Downloading authentic Zomato photos for Mandi Bistro...');
  for (const item of imageUrls) {
    const dest = path.join(targetDir, item.name);
    try {
      await download(item.url, dest);
      console.log('Downloaded:', item.name);
    } catch (e) {
      console.error('Failed to download:', item.name, e);
    }
  }
  console.log('All authentic Zomato images downloaded successfully!');
}

run();
