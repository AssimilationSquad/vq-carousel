const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3004;
const Carousel = require('../database/carousel.js');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../client/dist/')));

app.use('/rooms', express.static(path.join(__dirname, '../client/dist/')));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/rooms/:id', (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

//Get all images in database.
app.get('/carousel', function(req, res) {
  Carousel.getAllImgs((err, data) => {
    if (err) {
      res.status(500).send('Images missing!');
    } else {
      res.status(200).send(data);
    }
  })
});

//Get images for target ID.
app.get('/api/rooms/:id', function(req, res) {
  Carousel.getImgSet(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send('Server error!');
    } else {
      res.status(200).send(data);
    }
  })
});

app.listen(port, () => {
  console.log(`Listening for Carousel Images on ${port}`);
});

