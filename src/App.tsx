import React from 'react';
import './App.scss';

import Reminders from './components/Reminders';

const reminders = [
  { type: 'Thank you' },
  { type: 'Item shipped' },
  { type: 'Replenishmet' },
];

function App() {
  return <Reminders reminders={reminders}></Reminders>;
}

export default App;
