import React, { FunctionComponent } from 'react';

interface Customer {
  name: string
}

interface Reminder {
  type: string;
  date?: Date;
  customer: Customer;
}

type RemindersProps = {
  reminder: Reminder;
};

const Reminder: FunctionComponent<RemindersProps> = ({ reminder = {} }) => {
  return <div>{reminder.type}</div>;
};

export default Reminder;
