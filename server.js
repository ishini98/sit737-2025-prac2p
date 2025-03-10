const express = require('express');
const app = express();
const port = 3000;

// Serve a simple HTML page at the root URL ("/")
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Node.js Web Server</title>
        </head>
        <body>
            <h1>Welcome to My Node.js Web Server!</h1>
            <p>This is a simple HTML page served using Express.</p>
        </body>
        </html>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});