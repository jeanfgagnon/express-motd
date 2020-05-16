import express = require('express')

import controller from './controller';

const routes = function (app: express.Application) {
  app.route('/about').get(controller.about);
  app.get('*', function (req: express.Request, res: express.Response) {
    res.redirect('/about');
  });
};

export default routes;