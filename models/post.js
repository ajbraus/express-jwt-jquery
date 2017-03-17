"use strict";

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
    createdAt       : { type: Date }
  , updatedAt       : { type: Date }

  , name            : { type: String, required: true }
  , species         : { type: String }
  , description     : { type: String }
  , comments        : [{ type: Schema.ObjectId, ref: "Comment"}]
});

PostSchema.pre('save', function(next){
  // SET createdAt AND updatedAt
  var now = new Date();
  this.updatedAt = now;
  if ( !this.createdAt ) {
    this.createdAt = now;
  }
  
  next();
});

module.exports = mongoose.model('Post', PostSchema);