// app.js
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

// Routes
const apiRoutes = require('./routes/api');
app.use('/api/v1', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
