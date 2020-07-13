import React from 'react';
import './App.scss';

import Reminders from './components/Reminders';

const customer = { name: 'Daniel Moreno' };

const reminders = [
  { type: 'Thank you', customer },
  { type: 'Item shipped', customer },
  { type: 'Replenishmet', customer },
];

function App() {
  return <Reminders reminders={reminders}></Reminders>;
}

export default App;
