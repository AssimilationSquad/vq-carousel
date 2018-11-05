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

app.get('/rooms/:id', (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, '../client/dist/'));
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

//api/rooms/:id to serve my API
//rooms/:id to serve HTML
