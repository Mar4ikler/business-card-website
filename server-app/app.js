require('dotenv').config()
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, '../website/build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../website/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
