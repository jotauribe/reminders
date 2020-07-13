import React, { FunctionComponent } from 'react';

import ReminderPreview from '../ReminderPreview';

interface Customer {
  name: string
}

interface Reminder {
  type: string;
  date?: Date;
  customer: Customer;
}

type RemindersProps = {
  reminders: Reminder[];
};

const Reminders: FunctionComponent<RemindersProps> = ({ reminders = [] }) => {
  return (
    <div>
      {reminders.map((r) => (
        <ReminderPreview reminder={r} />
      ))}
    </div>
  );
};

export default Reminders;
