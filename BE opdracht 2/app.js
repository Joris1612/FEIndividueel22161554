const express = require('express');
const cors = require('cors')
const app = express();
const apiRoutes = require('./routes');

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

app.get('/', (req, res) =>{
  res.send("Test");
})

module.exports = app;