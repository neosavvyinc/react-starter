// for testing the production build only; depends on a build existing in `./dist`
const express = require('express');
const app = express();
const path = require('path');

/* eslint-disable no-console */

app.use(express.static('./dist'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
