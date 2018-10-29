const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3004;
const Carousel = require('../database/carousel.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/carousel', function(req, res) {
  Carousel.getImgs((err, data) => {
    if (err) {
      res.status(500).send('Images missing!')
    } else {
      res.status(200).send(data);
    }
  })
});

app.listen(port, () => {
  console.log(`Listening for Carousel Images on ${port}`);
});
