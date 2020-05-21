import express from 'express';
import fs from 'fs';

class LoadController {
  public path = '/loadmotd';
  public router = express.Router();

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.path, this.load);
  }

  public load = (request: express.Request, response: express.Response) => {

    try {
      let jsondata = fs.readFileSync('motd.json');
      if (jsondata) {
        response.json(JSON.parse(jsondata.toString()));
      }
    }
    catch {
      response.status(500).send("Can't read json data");
      response.end();
    }
  }
}

export default LoadController;