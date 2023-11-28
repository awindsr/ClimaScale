// server.js
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001; // Different from React's default port 3000

app.use(cors()); // Enable CORS for all routes if your React app is served from a different port
app.use(bodyParser.json());

app.post('/api/save-data', (req, res) => {
  const { monthly, annual } = req.body;
  const csvData = `Monthly CO2 Emissions (per capita),Annual CO2 Emissions (per capita)\n${monthly},${annual}`;

  fs.writeFile('./data.csv', csvData, (err) => {
    if (err) {
      console.error('Error writing to CSV file', err);
      res.status(500).send('Error writing to file');
      return;
    }
    res.send({ status: 'success', message: 'Data written to CSV file' });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
