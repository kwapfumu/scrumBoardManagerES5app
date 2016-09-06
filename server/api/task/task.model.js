'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var TaskSchema = new Schema({
  projectName:{
    type: String,
    required:true,
    trim: true
  },
  taskName:{
    type: String,
    required:true,
    trim: true
  },
  taskDescription:{
    type: String,
    required:true,
    trim: true
  },
  storyPoints:{
    type: Number,
    required:true
  },
  developer:{
    type: String,
    required:true,
    trim: true
  },
  sprintInfo:{
    sprintNumber:{type:Number, default:1, required:'Please fill sprint'},
    startDate:{type:Date,default:Date.now, required:'Please fill start date'},
    endDate:{type:Date, default:Date.now, required:'Please fill end Date'}
  },
  state:{
    type:String,
    default:'todo',
    enum:['todo', 'inProgress', 'done'],
    required:'please fill state'
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
},
{
  collection: 'releaseBacklog'
});

TaskSchema.pre('find', function(next){
  this.populate('user', 'name');
  next();
});
TaskSchema.pre('findOne', function(next){
  this.populate('user', 'name');
  next();
});
TaskSchema.statics.findByProjectName = function (aProjectName, callback) {
  this.find({'sprintInfo.startDate':1},'_id taskName taskDescription storyPoints developer state', {sort: 'storyPoints'}, callback);
};
TaskSchema.statics.findBySprintNumber = function (aSprintNumber, callback) {
  this.find({'sprintInfo.sprintNumber':1},
  '_id taskName taskDescription storyPoints developer state',
  {sort: 'storyPoints'}, callback);
};

/*Though still find out why it doesn't recognize the whole query...search around how it's written
  in mongooseStyle....
TaskSchema.statics.findByCurrentDate = function(currentDate, callback) {
  this.find(
    {{'sprintInfo.startDate':{$lte: currentDate}},{'sprintInfo.endDate':{$gte:currentDate}}},
    '_id taskName taskDescription storyPoints developer state', {sort: 'storyPoints'}, callback);
};*/
module.exports = mongoose.model('Task', TaskSchema);
