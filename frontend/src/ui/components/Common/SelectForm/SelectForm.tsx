import React, { FunctionComponent } from 'react';

import './index.scss';

interface Items {
  name: string;
}

type SelectForm = {
  onChange: any;
  label: String;
  items: Items[];
  keyForm: number;
};

const SelectForm: FunctionComponent<SelectForm> = ({
  onChange,
  label = '',
  items = [],
  keyForm,
}) => {
  return (
    <div className="SelectForm-container">
      <label className="SelectForm-label">{label}:</label>
      <select
        name="type"
        id="type"
        className="SelectForm-select"
        onChange={(e) => onChange(e.target.value)}
        key={keyForm}
      >
        {items.map((item, index) => (
          <option value={item.name} key={index}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectForm;
