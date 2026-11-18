const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

// Serve static files (CSS, JS, images) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Helper function to read and serve an HTML file using the fs module
function serveHtmlFile(res, fileName) {
  const filePath = path.join(__dirname, 'views', fileName);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading ${fileName}:`, err);
      return res.status(500).send('<h1>500 - Internal Server Error</h1>');
    }

    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(data);
  });
}

// Routes
app.get('/', (req, res) => {
  serveHtmlFile(res, 'index.html');
});

app.get('/about', (req, res) => {
  serveHtmlFile(res, 'about.html');
});

app.get('/contact', (req, res) => {
  serveHtmlFile(res, 'contact.html');
});

// Catch-all 404 route
app.use((req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
