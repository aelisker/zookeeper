const { animals } = require('./data/animals.json');
const express = require('express');
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming json data
app.use(express.json());

// anytime a client goes to <ourhost>/api, app will use router set in apiRoutes
// if client uses / as endpoint, router will serve back html routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// used to serve anything in public dir without a specific server endpoint route path
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});