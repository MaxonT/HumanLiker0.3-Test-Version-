const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the HumanLiker0.3(Demo) directory
const staticPath = path.join(__dirname, 'HumanLiker0.3(Demo)');
app.use(express.static(staticPath));

// Fallback to index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
