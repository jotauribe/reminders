import React, { FunctionComponent } from "react";

import ReminderPreview from '../ReminderPreview';
import ReminderForm from "./ReminderForm";

import "./index.scss";

interface Customer {
  name: string
}

interface Reminder {
  name: string;
  date?: Date;
  customer: Customer;
}

type RemindersProps = {
  reminders: Reminder[];
};

const customers = [
  { name: 'Uribe' },
  { name: 'Melina' },
  { name: 'Daniel' },
];

const Reminders: FunctionComponent<RemindersProps> = ({reminders = []}) => {
  return (
    <div className='Reminders-container'>
      <div>
        {reminders.map((r, index) => (
          <ReminderPreview key={index} reminder={r} />
        ))}
      </div>
      <ReminderForm types={reminders} customers={customers} />
    </div>
  );
};

export default Reminders;
