const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/carousel';

mongoose.connect(mongoUri);
const db = mongoose.connection;

module.exports = db;
