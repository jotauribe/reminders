import React, { FunctionComponent } from "react";

import "./index.scss";

type InputForm = {
  value: string;
  onChange: any;
  label: String;
  type: string;
};

const InputForm: FunctionComponent<InputForm> = ({ value, onChange, label, type }) => {
  return (
    <div className='ReminderForm-section-form'>
      <label className='ReminderForm-label'>
        {label}:
      </label>
      <input value={value} onChange={e => onChange(e.target.value)} type={type} className='ReminderForm-input date' />
    </div>
  );
};

export default InputForm;
