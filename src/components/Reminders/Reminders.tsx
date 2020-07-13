import React, { FunctionComponent } from 'react';

interface Reminder {
  type: string;
}

type RemindersProps = {
  reminders: Reminder[];
};

const Reminders: FunctionComponent<RemindersProps> = ({ reminders = [] }) => {
  return (
    <div>
      {reminders.map((r) => (
        <div>{r.type}</div>
      ))}
    </div>
  );
};

export default Reminders;
