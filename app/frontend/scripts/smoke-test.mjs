import { createServer } from 'node:http';
import { existsSync, readFileSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';

const dist = resolve('dist');
const base = '/auv-robotics';
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
};

function staticPath(url) {
  if (url === base || url === `${base}/`) {
    return '/index.html';
  }

  if (url.startsWith(`${base}/`)) {
    return url.slice(base.length);
  }

  return url;
}

const server = createServer((request, response) => {
  const url = staticPath(request.url.split('?')[0]);
  const filePath = join(dist, url);

  if (!filePath.startsWith(dist) || !existsSync(filePath)) {
    response.statusCode = 404;
    response.end('not found');
    return;
  }

  response.setHeader('Content-Type', mimeTypes[extname(filePath)] || 'application/octet-stream');
  response.end(readFileSync(filePath));
});

server.listen(4173, '127.0.0.1', async () => {
  try {
    const indexResponse = await fetch(`http://127.0.0.1:4173${base}/`);
    const html = await indexResponse.text();
    const scriptPath = html.match(/src="([^"]+\.js)"/)?.[1];
    const cssPath = html.match(/href="([^"]+\.css)"/)?.[1];

    if (!scriptPath || !cssPath) {
      throw new Error('Build output did not include JS and CSS asset references.');
    }

    const [scriptResponse, cssResponse] = await Promise.all([
      fetch(`http://127.0.0.1:4173${scriptPath}`),
      fetch(`http://127.0.0.1:4173${cssPath}`),
    ]);
    const script = await scriptResponse.text();

    const checks = {
      indexStatus: indexResponse.status,
      scriptStatus: scriptResponse.status,
      cssStatus: cssResponse.status,
      hasHeroCopy: script.includes('Student-built autonomous underwater vehicles'),
      hasOfficerData: script.includes('Rishika Desai'),
      hasSponsorData: script.includes('Phillips 66'),
      hasVehicleData: script.includes('Swim Shady'),
    };

    console.log(JSON.stringify(checks, null, 2));

    if (
      checks.indexStatus !== 200 ||
      checks.scriptStatus !== 200 ||
      checks.cssStatus !== 200 ||
      !checks.hasHeroCopy ||
      !checks.hasOfficerData ||
      !checks.hasSponsorData ||
      !checks.hasVehicleData
    ) {
      process.exitCode = 1;
    }
  } catch (error) {
    process.exitCode = 1;
    console.error(error);
  } finally {
    server.close();
  }
});
