import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const initialExpenses = [
  { id: uuidv4(), charge: 'rent', amount: 1000 },
  { id: uuidv4(), charge: 'car payment', amount: 800 },
  { id: uuidv4(), charge: 'credit card bill', amount: 1200 },
];

function App() {
  // *************** State values ****************
  // All expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  // Single expense
  const [charge, setCharge] = useState('');
  // Single amount
  const [amount, setAmount] = useState('');

  // *************** Functionality ****************
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== '' && amount > 0) {
      const singleExpense = { id: uuidv4(), charge, amount };
      setExpenses([...expenses, singleExpense]);
      setCharge('');
      setAmount('');
    }
  };

  return (
    <>
      <Alert />
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        total spending:{' '}
        <span className="total">
          ${' '}
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
