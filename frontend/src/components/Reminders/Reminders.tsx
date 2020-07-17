import React, { FunctionComponent } from "react";

import ReminderPreview from '../ReminderPreview';
import ReminderForm from "./ReminderForm";

import "./index.scss";

interface Customer {
  id: String,
  name: String
}

interface Reminder {
  id: String,
  type: String,
  dueDate: String,
  customer: Customer
}

type RemindersProps = {
  reminders: Reminder[];
};

const remindersTypes = [
  { name: 'Thank you' },
  { name: 'Item shipped' },
  { name: 'Replenishment' }
]

const customers = [
  { id: '123', name: 'Melina' },
  { id: '456', name: 'Daniel' },
  { id: '789', name: 'Uribe' },
  { id: '987', name: 'Fauricio' }
];

const Reminders: FunctionComponent<RemindersProps> = ({reminders = []}) => {
  return (
    <div className='Reminders-container'>
      <ReminderForm types={remindersTypes} customers={customers} />
      <label className='Reminders-list-title'>Reminders list</label>
      <div className='Reminders-list-container'>
        {reminders.map((r, index) => (
          <ReminderPreview key={index} reminder={r} />
        ))}
      </div>
    </div>
  );
};

export default Reminders;
