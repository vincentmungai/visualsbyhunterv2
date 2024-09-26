const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const assetsDir = path.join(__dirname, '/public/assets/portraits');

app.get('/assets', (req, res) => {
    fs.readdir(assetsDir, (err, files) => {
        if (err) {
            res.status(500).send({ error: 'Failed to fetch assets' });
            return;
        }

        const assets = files.map((file) => {
            return { name: file, url: `/public/assets/portraits/${file}` };
        });

        res.json(assets);
    });
});

app.listen(5000, () => console.log('Server running on port 5000'));