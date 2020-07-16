const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const ReminderSchme = new Schema({
  id: Number,
  type: String,
  dueDate: String,
  customer: {
    id: Number,
    name: String,
  },
})

module.exports = Mongoose.model('Reminders', ReminderSchme)
