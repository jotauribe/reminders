
const MainRouter = require('express').Router();
const RemindersRouter = require('./reminder.routes')

MainRouter.use('/', RemindersRouter);

module.exports = MainRouter;