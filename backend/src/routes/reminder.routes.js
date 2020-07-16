const Router = require('express').Router()
const { ReminderService } = require('../services')

Router.post('/reminders/', ReminderService.create)
  .get('/reminders/', ReminderService.find)
  .get('/reminders/:id', ReminderService.get)
  .put('/reminders/:id', ReminderService.update)
  .delete('/reminders/:id', ReminderService.remove)

module.exports = Router
