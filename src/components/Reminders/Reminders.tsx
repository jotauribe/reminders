import React, { FunctionComponent } from "react";

import ReminderForm from "./ReminderForm";

import "./index.scss";

export interface Type {
  name: string;
}

type RemindersProps = {
  types: Type[];
};

const customers = [
  { name: 'Uribe' },
  { name: 'Melina' },
  { name: 'Daniel' },
];

const Reminders: FunctionComponent<RemindersProps> = ({ types = []}) => {
  return (
    <div className='Reminders-container'>
      <div>
        {types.map((r, index) => (
          <div key={index}>{r.name}</div>
        ))}
      </div>
      <ReminderForm types={types} customers={customers} />
    </div>
  );
};

export default Reminders;
