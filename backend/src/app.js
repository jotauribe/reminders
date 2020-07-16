const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = function appBuilder({ router, port, baseUrl }) {
  //Building Express server
  const server = express();
  server.use(cors());
  server.use(baseUrl, router);
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  //Connecting to MongoDB database
  const { MONGO_USER, MONGO_PWD } = process.env;

  mongoose.connect(
    `mongodb://${MONGO_USER}:${MONGO_PWD}@ds129402.mlab.com:29402/reminders`,
    {
      useNewUrlParser: true,
    }
  );

  return {
    start: () =>
      server.listen(port, () => console.log(`App listening on port ${port}!`)),
  };
};

module.exports = app;
