import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';
import { v4 as uuidv4 } from 'uuid';

const initialExpenses = [
  { id: uuidv4(), charge: 'rent', amount: 1000 },
  { id: uuidv4(), charge: 'car payment', amount: 800 },
  { id: uuidv4(), charge: 'credit card bill', amount: 1200 },
];

console.log(initialExpenses);

function App() {
  return (
    <>
      <Alert />
      <ExpenseForm />
      <ExpenseList />
    </>
  );
}

export default App;
