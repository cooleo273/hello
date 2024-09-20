const express = require('express');

const app = express();

app.use(express.json());

// Create a simple route to test
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start Server on dynamic port (for serverless)
module.exports = app;
