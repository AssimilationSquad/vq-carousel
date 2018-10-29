const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const carouselSchema = new mongoose.Schema({
  _id: Number,
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

const getAllImgs = (callback) => {
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

const getImgSet = (id, callback) => {
  Carousel.find({ _id: id }, (err, data) => {
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
module.exports.getAllImgs = getAllImgs;
module.exports.getImgSet = getImgSet;
