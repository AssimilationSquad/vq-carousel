const db  = require('./index.js');
const Carousel = require('./carousel.js');

const sampleData = [
  {
    title: 'Neuschwanstein Castle',
    imgs: [
      {
        imgURL: 'https://s3-us-west-1.amazonaws.com/lairbnb-carousel/1.jpg',
        imgDescription: 'This is a room.',
      },
      {
        imgURL: 'https://s3-us-west-1.amazonaws.com/lairbnb-carousel/2.jpg',
        imgDescription: 'This is another room.',
      },
      {
        imgURL: 'https://s3-us-west-1.amazonaws.com/lairbnb-carousel/2.jpg',
        imgDescription: 'This is another room.',
      },
      {
        imgURL: 'https://s3-us-west-1.amazonaws.com/lairbnb-carousel/2.jpg',
        imgDescription: 'This is another room.',
      },
      {
        imgURL: 'https://s3-us-west-1.amazonaws.com/lairbnb-carousel/2.jpg',
        imgDescription: 'This is another room.',
      },
    ],
  },
];

const insertSampleImgs = function() {
  Carousel.create(sampleData)
    .then(() => db.disconnect());
};

insertSampleImgs();
