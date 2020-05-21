import App from './app';

import DefaultController from './api/DefaultController';
import LoadController from './api/LoadController';

const app = new App(
  [
    new DefaultController(),
    new LoadController(),
  ],
  5000,
);

app.listen();