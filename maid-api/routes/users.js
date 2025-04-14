const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    console.log('Registering user:', username);

    const hash = await bcrypt.hash(password, 10);

    db.query('INSERT INTO users (username, password_hash) VALUES (?, ?)', [username, hash], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: err });
        }
        res.json({ message: 'User registered successfully' });
    });
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
        if (err || results.length === 0) return res.status(401).json({ error: 'Invalid credentials' });

        const user = results[0];
        const match = await bcrypt.compare(password, user.password_hash);
        if (!match) return res.status(401).json({ error: 'Invalid credentials' });

        res.json({ message: 'Login successful' });
    });
});

module.exports = router;
