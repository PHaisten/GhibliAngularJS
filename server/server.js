const express = require('express');
const path = require('path');

let app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client')));

app.listen(3000, console.log('Server is running on port 3000'));
