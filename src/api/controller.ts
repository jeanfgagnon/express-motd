import express from 'express';

class Controller {
  public path = '/about';
  public router = express.Router();

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.path, this.about);
  }

  public about = (request: express.Request, response: express.Response) => {
    const htm = `
      <h1>express-motd microservices</h1>
      version 0.1.AAAA<br />
      <br />
      API:<br />
      loadmotd: send the motd records<br />
      savemotd: save the motd received from frontend
    `;
    response.write(htm);
  }
}

export default Controller;
//module.exports = controllers;