import './App.css';
import {Button, Stack} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import BudgetCard from './components/BudgetCard';
import AddBudgets from './components/AddBudgets';
import { useState } from 'react';
import { useBudgets } from './context/Context';
import AddExpense from './components/AddExpense';
function App() {

  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);

  const {budgets, getBudgetExpenses} = useBudgets()
  return (
    <div className="App">
     <Container>
      <Stack direction='horizontal' gap={'2'} className='mb-4'>
        <h1 className='me-auto'>Budget</h1>
        <Button variant='primary' 
        onClick={()=>setShowAddBudgetModal(true)}
        >Add Budget</Button>

        <Button variant='outline-primary' 
        onClick={()=>setShowAddExpenseModal(true)}
        >Add Expense</Button>
      </Stack>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'reapeat(auto-fill, minmax(300px,1fr))',
          gap: '1frem',
          alignItems: 'flex-start'
        }}
      >
      {budgets.map(budget=>{
        const amount = getBudgetExpenses(budget.id).reduce(
          (total,expense)=> total + expense.amount,0)
        return(
        <BudgetCard
          key={budget.id}
          name={budget.name}
          amount={amount}
          max={budget.max}
        />
      )
        })}

      </div>
     </Container>
     <AddBudgets show={showAddBudgetModal} handleClose={()=>setShowAddBudgetModal(false)}/>
     <AddExpense show={showAddExpenseModal} handleClose={()=>setShowAddExpenseModal(false)}/>
    </div>
  );
}

export default App;
