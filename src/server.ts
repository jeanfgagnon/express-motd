import express = require('express')
const app: express.Application = express();
const port = process.env.PORT || 3000;

import routes  from './api/routes';

routes(app);
app.listen(port, function () {
  console.log('Server started on port: ' + port);
});