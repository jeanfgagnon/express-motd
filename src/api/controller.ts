import express = require('express')

var properties = require('../../package.json')

var controller = {
  about: function (req: express.Request, res: express.Response) {
    var aboutInfo = {
      name: properties.name,
      version: properties.version,
      author: properties.author
    }
    //res.json(aboutInfo);
    const htm = `
      <h1>express-motd microservices</h1>
      version ${properties.version}<br />
      <br />
      API:<br />
      loadmotd: send the motd records<br />
      savemotd: save the motd received from  frontend
    `;
    res.write(htm);
  },
  // getDistance: function (req, res) {
  //   distance.find(req, res, function (err, dist) {
  //     if (err)
  //       res.send(err);
  //     res.json(dist);
  //   });
  // },
};

export default controller;
//module.exports = controllers;