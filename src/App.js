import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import BudgetForm from './components/BudgetForm';
import ExpenseList from './components/ExpenseList';
import BudgetSummary from './components/BudgetSummary';
import SavingSuggestions from './components/SavingSuggestions';
import Analytics from './components/Analytics';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import ExpenseQRScanner from './components/ExpenseQRScanner';



function App() {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);

  function handleBudgetSubmit(newBudget) {
    setBudget(newBudget);
  }

  function handleExpenseSubmit(newExpense) {
    setExpenses([...expenses, newExpense]);
  }

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user",
      password: "pass"
    },
    {
      username: "pavan",
      password: "1234"
    },
    {
      username: 'yaswanth',
      password: "1234"
    }, 
    {
      username: 'aditya',
      password: '1234'
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="forms">
       <h2>XPENSO</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-containers">
          <label className='log'>Username </label>
          <input className='logger' type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-containes">
          <label className='log'>Password </label>
          <input className='logger' type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <p id="start">Forgot Password</p>
        <div className="button-containers">
          <input className='logger' type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? <div className="container">
      <Header />
      <ExpenseQRScanner />
      <div className="budget-section">
        <BudgetForm onSubmit={handleBudgetSubmit} />
        <BudgetSummary budget={budget} expenses={expenses} />
      </div>
      <div className="expense-section">
        <ExpenseForm onSubmit={handleExpenseSubmit} />
        <ExpenseList expenses={expenses} />
      </div>
      <div className="suggestions-section">
        <SavingSuggestions expenses={expenses} remainingBudget={budget - expenses.reduce((acc, cur) => acc + cur.amount, 0)} />
        <Analytics expenses={expenses} />
        <Footer />
      </div>
    </div>: renderForm}
      </div>
    </div>
  );
}

export default App;
