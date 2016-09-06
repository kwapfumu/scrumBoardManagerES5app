'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://127.0.0.1:27017/scrumboardes5app'
  },
  //set it to false to keep data in db after restart
  seedDB: false
};
