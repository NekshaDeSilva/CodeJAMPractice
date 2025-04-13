import express from 'express';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const server = http.createServer(app);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
