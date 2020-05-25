import App from './app';

import DefaultController from './api/DefaultController';
import LoadController from './api/LoadController';
import SaveController from './api/SaveController';
const app = new App(
  [
    new DefaultController(),
    new LoadController(),
    new SaveController()
  ],
  5000,
);

app.listen();