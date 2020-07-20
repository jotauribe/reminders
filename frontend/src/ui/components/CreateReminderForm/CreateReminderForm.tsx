import React, { FunctionComponent, useState } from "react";

import InputForm from '../Common/InputForm';
import SelectForm from '../Common/SelectForm';
import "./index.scss";

interface Type {
  name: string;
}
interface ReminderForm {
  customers: Object;
  types: Object;
}

interface Customer {
  name: string;
}

type ReminderFormProps = {
  customers: Customer[];
  types: Type[];
};

const ReminderForm: FunctionComponent<ReminderFormProps> = ({ customers = [], types = [] }) => {

  const [customer, setCustomer] = useState('');
  const [type, setType] = useState('');
  const [date, setDate] = useState('');

  const saveReminder = () => {
    alert(customer + ' - ' + type + ' - ' + date)
  }

  return (
    <div className='ReminderForm-container'>
      <label className='ReminderForm-title'>Reminder Form</label>
      <div className='ReminferForm-content'>
        <SelectForm onChange={setCustomer} label={'Customer'} items={customers} keyForm={1}/>
        <SelectForm onChange={setType} label={'Types'} items={types} keyForm={2}/>
        <InputForm value={date} onChange={setDate} label={'Date'} type={'date'}/>
      </div>
      <button className='ReminderForm-button' onClick={saveReminder}>Save</button>
    </div>
  );
};

export default ReminderForm;
