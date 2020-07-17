import React, { FunctionComponent } from 'react';

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
  reminder: Reminder;
};

const Reminder: FunctionComponent<RemindersProps> = ({ reminder = {} }) => {
  return (
    <div className='Card-container'>
      <label><strong>Type:</strong> {reminder.type}</label>
      <label><strong>Due Date:</strong> {reminder.dueDate}</label>
      {reminder.customer && 
        <label><strong>Customer:</strong> {reminder.customer.name}</label>
      }
    </div>
  );
};

export default Reminder;
