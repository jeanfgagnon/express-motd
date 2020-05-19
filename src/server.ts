//import express = require('express')
/*
import express from 'express';
import routes  from './api/routes';

const app = express();
const port = process.env.PORT || 3000;


routes(app);
app.listen(port, function () {
  console.log('Server started on port: ' + port);
});
*/

import App from './app';
import Controller from './api/controller';

const app = new App(
  [
    new Controller(),
  ],
  5000,
);

app.listen();