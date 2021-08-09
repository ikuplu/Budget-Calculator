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
  // Alert
  const [alert, setAlert] = useState({ show: false });

  // *************** Functionality ****************
  // Handle charge
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  // Handle amount
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  // Handle alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== '' && amount > 0) {
      const singleExpense = { id: uuidv4(), charge, amount };
      setExpenses([...expenses, singleExpense]);
      handleAlert({ type: 'success', text: 'item added' });
      setCharge('');
      setAmount('');
    } else {
      handleAlert({
        type: 'danger',
        text: 'charge type may not be empty and amount has to be bigger than zero',
      });
    }
  };

  // Clear all items
  const clearAllItems = () => {
    console.log('cleared all items');
    setExpenses([]);
  };

  // Clear single item
  const clearSingleItem = (id) => {
    console.log(`Deleted item with id: ${id}`);
  };

  // Edit single item
  const editItem = (id) => {
    console.log(`Edited item with id: ${id}`);
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
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
        <ExpenseList
          expenses={expenses}
          clearAllItems={clearAllItems}
          clearSingleItem={clearSingleItem}
          editItem={editItem}
        />
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
