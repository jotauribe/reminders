import React from 'react';
import './App.scss';

import Reminders from './components/Reminders';

const reminders = [
  { id: '1', type: 'Thank you', dueDate: '06/06/2020', customer: { id: '123', name: 'Melina' } },
  { id: '2', type: 'Item Shipped', dueDate: '06/06/2020', customer: { id: '456', name: 'Daniel' }  },
  { id: '3', type: 'Replenishment', dueDate: '06/06/2020', customer: { id: '789', name: 'Uribe' }  },
  { id: '4', type: 'Thank you', dueDate: '06/06/2020', customer: { id: '987', name: 'Fauricio' }  }
];

function App() {
  return <Reminders reminders={reminders}></Reminders>;
}

export default App;
