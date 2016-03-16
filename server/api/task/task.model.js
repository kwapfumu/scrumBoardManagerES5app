'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TaskSchema = new Schema({
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
  TaskSchema.statics.findBySprintNumber = function (aSprintNumber, callback) {
  	this.find({'sprintInfo.sprintNumber':1},'_id taskName taskDescription storyPoints developer state', {sort: 'storyPoints'}, callback);
  };
module.exports = mongoose.model('Task', TaskSchema);
