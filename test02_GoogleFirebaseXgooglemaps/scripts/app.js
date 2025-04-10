//ExpressJS
//  <script src="https://cdn.jsdelivr.net/npm/openai@4.91.1/index.min.js"></script>
import express from 'express';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Go up one folder from 'scripts' to reach root, then into 'public'
const publicPath = path.join(__dirname, '../public');

// Serve static files
app.use(express.static(publicPath));

// Send index.html at root
app.get('/', (req, res) => {
  console.log('💥 Someone visited "/"');
  res.sendFile(path.join(__dirname, '../public/index.html'));
  res.status(200).send('<h1>Hey Successfully loaded.</h1>');
});
app.get('/:value', (req, res) => {
  const value = req.params.value;
  console.log(`Value after / is: ${value}`);
  res.status(200).send(`<h1>Value: ${value}</h1>`);
});
app.get('/play', (req, res) => {
  res.status(200).send('<h1>Play</h1>');
});
app.get('/heyplay', (req,res)=>{
  res.status(201).send('<h3>HeyPlay</h3>');
})
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
