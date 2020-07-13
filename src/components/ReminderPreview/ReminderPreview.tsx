import React, { FunctionComponent } from 'react';

interface Customer {
  name: string
}

interface Reminder {
  name: string;
  date?: Date;
  customer: Customer;
}

type RemindersProps = {
  reminder: Reminder;
};

const Reminder: FunctionComponent<RemindersProps> = ({ reminder = {} }) => {
  return <div>{reminder.name}</div>;
};

export default Reminder;
