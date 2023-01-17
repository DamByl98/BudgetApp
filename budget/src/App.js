import './App.css';
import {Button, Stack} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import BudgetCard from './components/BudgetCard';
function App() {
  return (
    <div className="App">
     <Container>
      <Stack direction='horizontal' gap={'2'} className='mb-4'>
        <h1 className='me-auto'>Budget</h1>
        <Button variant='primary'>Add Budget</Button>
        <Button variant='outline-primary'>Add Expense</Button>
      </Stack>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'reapeat(auto-fill, minmax(300px,1fr))',
          gap: '1frem',
          alignItems: 'flex-start'
        }}
      >
      <BudgetCard name={"Dziwki"} amount={50} max={500}></BudgetCard>
      </div>
     </Container>
    </div>
  );
}

export default App;
