import App from './app';
import Controller from './api/controller';

const app = new App(
  [
    new Controller(),
  ],
  5000,
);

app.listen();