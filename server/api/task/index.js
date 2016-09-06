(function(){
  'use strict';

  var express = require('express');
  var controller = require('./task.controller');
  var auth = require('../../auth/auth.service');

  var router = express.Router();

  //router.get('/', auth.hasRole('admin'), controller.index);
  router.get('/admin/tasks', auth.hasRole('admin'), controller.list);
  router.post('/admin/tasks/new', auth.hasRole('admin'), controller.create);
  router.get('/admin/tasks/:id',auth.hasRole('admin'), controller.taskByID);
  router.put('/admin/tasks/:id/edit', auth.hasRole('admin'), controller.update);
  router.delete('/admin/tasks/:id/delete', auth.hasRole('admin'), controller.destroy);
  router.get('/admin/sprints', auth.hasRole('admin'));
  router.get('/admin/currentSprint', auth.hasRole('admin'));
  router.get('/releaseBacklog', auth.isAuthenticated(), controller.index);
  router.get('/releaseBacklog/sprints', auth.isAuthenticated(), controller.index);
  router.get('/releaseBacklog/currentSprint', auth.isAuthenticated(), controller.index);
  router.get('/releaseBacklog/myTasks', auth.isAuthenticated(), controller.index);


  module.exports = router;

})();
