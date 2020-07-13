import React from 'react';
import './App.scss';

import Reminders from './components/Reminders';

const types = [
  { name: 'Thank you' },
  { name: 'Item shipped' },
  { name: 'Replenishmet' },
];

function App() {
  return <Reminders types={types}></Reminders>;
}

export default App;
