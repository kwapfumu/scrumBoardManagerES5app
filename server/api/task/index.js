'use strict';

var express = require('express');
var controller = require('./task.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.get('/admin/tasks', controller.list);
router.get('/admin/tasks/:id', controller.taskByID);
router.post('/admin/tasks/new', auth.isAuthenticated(), controller.create);
router.put('/admin/tasks/:id/edit', auth.isAuthenticated(), controller.update);
router.delete('/admin/tasks/:id/delete', auth.isAuthenticated(), controller.destroy);

module.exports = router;
