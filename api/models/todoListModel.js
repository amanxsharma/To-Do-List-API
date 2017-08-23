// npm install mongoose --save
// Mongoose is used to interact with a MongoDB(Database) instance.

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// model of how our collection should look like
var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);