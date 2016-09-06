
  'use strict';

  var _ = require('lodash');
  var Task = require('./task.model');

  // Get list of tasks
  exports.index = function(req, res) {
    Task.find(function (err, tasks) {
      if(err) { return handleError(res, err); }
      return res.status(200).json(tasks);
    });
  };

  /**
   * List of Tasks
   */
  exports.list = function(req, res) {
  	Task.find().sort('+taskName').populate('user', 'displayName').exec(function(err, tasks) {
  		if (err) {
        return handleError(res, err);
  		} else {
        console.log(tasks);
        return res.status(200).json(tasks);
  			//res.jsonp(tasks);
  		}
  	});
  };

  // Get a single task
  exports.show = function(req, res) {
    Task.findById(req.params.id, function (err, task) {
      if(err) { return handleError(res, err); }
      if(!task) { return res.status(404).send('Not Found'); }
      return res.json(task);
    });
  };

  /**
   * Task middleware from scrumBoardMeanApp
   */
  exports.taskByID = function(req, res, next, id) {
  	Task.findById(id).populate('user', 'displayName').exec(function(err, task) {
  		if (err) return next(err);
  		if (!task) return next(new Error('Failed to load Task ' + id));
  		req.task = task ;
  		next();
  	});
  };

  // Creates a new task in the DB.
  exports.create = function(req, res) {
      //passes as parameter req.body i.e what's inside taskResInstance in adminCreateTaskCtrl
      var task = new Task({
        projectName: req.body.projectName,
        taskName: req.body.taskName,
        taskDescription: req.body.taskDescription,
        storyPoints: req.body.storyPoints,
        developer: req.body.developer,
        backlogName: req.body.backlogName,
        state: req.body.state,
        sprintInfo: req.body.sprintInfo
      });
      //adds the currently logged in user(req.body) to task object
    	task.user = req.user;
    	task.save(function(err,task) {
    		if (err) {
    			 return handleError(res, err);
    		} else {
          return res.status(200).jsonp(task);
    			//res.json(task);
    		}
    	});
    };

  // Updates an existing task in the DB.
  exports.update = function(req, res) {
    if(req.body._id) { delete req.body._id; }
    Task.findById(req.params.id, function (err, task) {
      if (err) { return handleError(res, err); }
      if(!task) { return res.status(404).send('Not Found'); }
      var updated = _.merge(task, req.body);
      updated.save(function (err) {
        if (err) { return handleError(res, err); }
        return res.status(200).json(task);
      });
    });
  };

  /**
   * Update a Task from scrumBoardMeanApp...not sure if working
   */
  /*exports.update = function(req, res) {
  	var task = req.task ;
    //uses lodash to...
  	task = _.extend(task , req.body);

  	task.save(function(err) {
  		if (err) {
  			 return handleError(res, err);
  		} else {
        res.status(200).json(task);
  			//res.jsonp(task);
  		}
  	});
  };*/

  // Deletes a task from the DB.
  exports.destroy = function(req, res) {
    Task.findById(req.params.id, function (err, task) {//TODO: find a way to use handleUnauthorized here
      if(err) {
        return handleError(res, err);
      }else if(!task) {
        return res.status(404).send('Not Found');
      }else{
        task.remove(function(err) {
          if(err) { return handleError(res, err); }
          return res.status(204).send('No Content');
        });
      }
    });
    /*
  Thing.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(handleUnauthorized(req, res))
    .then(removeEntity(res))
    .catch(handleError(res));
  */
  };

  function handleError(res, err) {
    return res.status(500).send(err);
  }

  function handleUnauthorized(req, res) {
    return function(entity) {
      if (!entity) {return null;}
      if(entity.user._id.toString() !== req.user._id.toString()){
        res.send(403).end();
        return null;
      }
      return entity;
    }
  }
