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
        imgURL: 'https://s3-us-west-1.amazonaws.com/lairbnb-carousel/3.jpg',
        imgDescription: 'This is another room.',
      },
      {
        imgURL: 'https://s3-us-west-1.amazonaws.com/lairbnb-carousel/4.jpg',
        imgDescription: 'This is another room.',
      },
      {
        imgURL: 'https://s3-us-west-1.amazonaws.com/lairbnb-carousel/5.jpg',
        imgDescription: 'This is another room.',
      },
    ],
  },
  {
    title: 'Hohenzollern Castle',
    imgs: [
      {
        imgURL: 'https://s3-us-west-1.amazonaws.com/lairbnb-carousel/6.jpg',
        imgDescription: 'This is a room.',
      },
      {
        imgURL: 'https://s3-us-west-1.amazonaws.com/lairbnb-carousel/7.jpg',
        imgDescription: 'This is another room.',
      },
      {
        imgURL: 'https://s3-us-west-1.amazonaws.com/lairbnb-carousel/8.jpg',
        imgDescription: 'This is another room.',
      },
      {
        imgURL: 'https://s3-us-west-1.amazonaws.com/lairbnb-carousel/9.jpg',
        imgDescription: 'This is another room.',
      },
    ],
  },
  {
    title: 'Heidelberg Castle',
    imgs: [
      {
        imgURL: 'https://s3-us-west-1.amazonaws.com/lairbnb-carousel/10.jpg',
        imgDescription: 'This is a room.',
      },
      {
        imgURL: 'https://s3-us-west-1.amazonaws.com/lairbnb-carousel/11.jpg',
        imgDescription: 'This is another room.',
      },
      {
        imgURL: 'https://s3-us-west-1.amazonaws.com/lairbnb-carousel/12.jpg',
        imgDescription: 'This is another room.',
      },
      {
        imgURL: 'https://s3-us-west-1.amazonaws.com/lairbnb-carousel/13.jpg',
        imgDescription: 'This is another room.',
      },
      {
        imgURL: 'https://s3-us-west-1.amazonaws.com/lairbnb-carousel/14.jpg',
        imgDescription: 'This is another room.',
      },
      {
        imgURL: 'https://s3-us-west-1.amazonaws.com/lairbnb-carousel/15.jpg',
        imgDescription: 'This is another room.',
      },
    ],
  },
];
console.log(Carousel);

const insertSampleImgs = function() {
  const randomInt = () => {
    return Math.floor(Math.random() * Math.floor(3))
  };
  var listArr = [];
  for (var i = 1; i < 101; i++) {
    var newListing = Object.assign({}, sampleData[randomInt()]);
    Object.assign(newListing, {_id: i});
    listArr.push(newListing);
  }
  Carousel.create(listArr)
    .then(() => db.close());
};

insertSampleImgs();
