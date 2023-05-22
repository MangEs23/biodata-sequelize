const { urlencoded } = require('express');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./app/models');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;
const corsOptions = {
  origin: [
    `http://localhost::${port}`,
  ],
};

db.sequelize.sync().then(() => {
  console.log('Biodatas table has been created successfully.');
}).catch((error) => {
  console.error('Unable to create the Biodata:', error);
});

function run() {
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(urlencoded({ extended: true }));

  app.use('/biodata', routes);

  app.listen(port, () => {
    console.log(`Running on http://localhost::${port}`);
  });
}

run();
