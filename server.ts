import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// Listen on DEFAULT_APP_PORT (3000) or PORT (avoiding 8080 collision with ingress nginx)
const PORT = parseInt(process.env.DEFAULT_APP_PORT || (process.env.PORT && process.env.PORT !== '8080' ? process.env.PORT : '3000'), 10);

// Health check endpoint for load balancers and hosting monitors
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok', service: 'Fradynex Production Server' });
});

// Serve the static files from the React build with cache headers
app.use(express.static(path.join(__dirname, 'dist'), {
  maxAge: '1y',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('index.html')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    }
  },
}));

// SPA Fallback: Any route not matching a static file will serve index.html
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
