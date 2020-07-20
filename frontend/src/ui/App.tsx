import React from 'react';
import styled from 'styled-components';

import Reminders from './components/ReminderList';
import CreateReminderForm from './components/CreateReminderForm';

const customer = { name: 'Daniel Moreno' };
const customers = [{ name: 'Uribe' }, { name: 'Melina' }, { name: 'Daniel' }];

const reminders = [
  { name: 'Thank you', customer },
  { name: 'Item shipped', customer },
  { name: 'Replenishmet', customer },
];

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

function App() {
  return (
    <Container>
      <Reminders reminders={reminders} />
      <CreateReminderForm types={reminders} customers={customers} />
    </Container>
  );
}

export default App;
