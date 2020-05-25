import express from 'express';
import fs from 'fs';

class LoadController {
  public path = '/savemotd';
  public router = express.Router();

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.post(this.path, this.save);
  }

  public save = (request: express.Request, response: express.Response) => {

    try {
      let jsondata = request.body;

      fs.writeFileSync('motd.json', JSON.stringify(jsondata));
      response.status(200).send('ok').end();
      console.log('dans le save et body = ', jsondata);
    }
    catch {
      response.status(500).send("Can't read json data");
      response.end();
    }
  }
}

export default LoadController;