const { ReminderModel } = require('../models')

const create = async function createReminder(req, res) {
  res.send({ message: 'paila' })
}

const get = async function getReminderById(req, res) {
  const { id } = req.params
  const reminder = await ReminderModel.findById(id)

  res.send(reminder)
}

const find = async function findReminders(req, res) {
  const reminders = await ReminderModel.find()

  res.send(reminders)
}

const update = async function updateReminder(req, res) {
  const { id } = req.params
  const updatedReminder = await ReminderModel.findByIdAndUpdate(id, req.body)
  res.send({ message: 'Document udpated.', updatedReminder })
}

const remove = async function removeReminder(req, res) {
  const { id } = req.params
  await ReminderModel.findByIdAndRemove(id)
  res.send('Deleted successfully!')
}

module.exports = { create, get, find, remove, update }
