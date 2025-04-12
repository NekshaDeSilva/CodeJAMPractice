const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const users = [];

const generateToken = (user) => {
    return jwt.sign({ id: user.id, username: user.username }, 'secretKey', { expiresIn: '1h' });
};

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).send('Username and password are required');
    const existingUser = users.find(user => user.username === username);
    if (existingUser) return res.status(400).send('User already exists');
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: users.length + 1, username, password: hashedPassword };
    users.push(newUser);
    res.status(201).send({ message: 'User created successfully', userId: newUser.id });
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).send('Username and password are required');
    const user = users.find(user => user.username === username);
    if (!user) return res.status(400).send('Invalid credentials');
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).send('Invalid credentials');
    const token = generateToken(user);
    res.status(200).send({ message: 'Login successful', token });
});

app.get('/profile', (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).send('Authorization header required');
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, 'secretKey');
        const user = users.find(user => user.id === decoded.id);
        if (!user) return res.status(404).send('User not found');
        res.status(200).send({ id: user.id, username: user.username });
    } catch (err) {
        res.status(401).send('Invalid token');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// Example animation function (for demonstration purposes)
const animateText = (text, delay) => {
    let index = 0;
    const interval = setInterval(() => {
        process.stdout.write(text[index]);
        index++;
        if (index === text.length) {
            clearInterval(interval);
            process.stdout.write('\n');
        }
    }, delay);
};

// Example usage of the animation function
animateText('Server is live and ready to handle requests!', 100);