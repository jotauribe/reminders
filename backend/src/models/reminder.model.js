const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const ReminderSchme = new Schema({
  name: String,
  id: Number,
})

module.exports = Mongoose.model('Reminders', ReminderSchme)
