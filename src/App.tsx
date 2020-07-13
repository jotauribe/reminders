import React from 'react';
import './App.scss';

import Reminders from './components/Reminders';

const customer = { name: 'Daniel Moreno' };

const reminders = [
  { name: 'Thank you', customer },
  { name: 'Item shipped', customer },
  { name: 'Replenishmet', customer },
];

function App() {
  return <Reminders reminders={reminders}></Reminders>;
}

export default App;
