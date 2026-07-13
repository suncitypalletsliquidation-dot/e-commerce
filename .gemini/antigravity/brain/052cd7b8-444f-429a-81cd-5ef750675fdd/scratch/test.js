const fs = require('fs');
const path = require('path');
const { createClient } = require('/Users/admin/Documents/FREELANCE/FABIEN/e-commerce/node_modules/next-sanity');

// Simple .env parser
const envPath = '/Users/admin/Documents/FREELANCE/FABIEN/e-commerce/.env';
const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    const key = match[1];
    let value = match[2] || '';
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }
    env[key] = value.trim();
  }
});

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-03-09',
  useCdn: false,
  token: env.SANITY_PROJECT_API_TOKEN,
  perspective: 'published',
});

async function run() {
  try {
    const sliderCount = await client.fetch('count(*[_type == "heroSlider"])');
    console.log('Total heroSlider count in Sanity:', sliderCount);

    const sliders = await client.fetch('*[_type == "heroSlider"]{_id, name}');
    console.log('Sliders in Sanity:', JSON.stringify(sliders, null, 2));

    const bannerCount = await client.fetch('count(*[_type == "heroBanner"])');
    console.log('Total heroBanner count in Sanity:', bannerCount);
  } catch (error) {
    console.error('Error fetching from Sanity:', error);
  }
}

run();
