const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const carouselSchema = new mongoose.Schema({
  title: String,
  imgs: [
    {
      imgURL: String,
      imgDescription: String,
    },
  ],
},
{
  timestamps: true,
});

const Carousel = mongoose.model('Carousel', carouselSchema);

const getCarouselImgs = (callback) => {
  Carousel.find({}, (err, data) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      console.log(data);
      callback(null, data);
    }
  });
};



module.exports = Carousel;
