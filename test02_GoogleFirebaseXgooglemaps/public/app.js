// Import the Express framework for creating the server
import express from 'express';
// Import the Path module for handling and transforming file paths
import path from 'path';
// Import fileURLToPath to convert a file URL to a path
import { fileURLToPath } from 'url';

// Initialize the Express application
const app = express();
// Define the port number for the server to listen on
const port = 8000;
// Determine the current file name
const __filename = fileURLToPath(import.meta.url);
// Determine the directory name of the current file
const __dirname = path.dirname(__filename);

// Set the path to the 'public' folder (one level up from the current 'scripts' directory)
const publicPath = path.join(__dirname, '../public');

// Middleware to serve static files (e.g., CSS, JavaScript, images)
app.use(express.static(publicPath));

// Route handler for the root URL ('/')
app.get('/', (req, res) => {
  console.log('💥 Someone visited "/"');
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Route handler for dynamic URLs (e.g., '/:value')
app.get('/:value', (req, res) => {
  const value = req.params.value;
  console.log(`Value after / is: ${value}`);
  res.status(200).send(`<h1>Value: ${value}</h1>`);
});

// Route handler for the '/play' URL
app.get('/play', (req, res) => {
  res.status(200).send('<h1>Play</h1>');
});

// Route handler for the '/heyplay' URL
app.get('/heyplay', (req, res) => {
  res.status(201).send('<h3>HeyPlay</h3>');
});

// Start the server and begin listening on the specified port
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
