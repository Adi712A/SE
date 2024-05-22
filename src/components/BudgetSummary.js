import React from 'react';

function BudgetSummary({ budget, expenses }) {
  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const remainingBudget = budget - totalExpenses;
  const alertClass = remainingBudget < 0 ? 'alert-danger' : 'alert-success';

  return (
    <div className={`alert ${alertClass}`}>
      <p style={{backgroundColor: "black",color:"white" ,borderRadius:"10px", width: '50%' , padding: '10px',boxShadow: '0px 2px 3px gold'}}>Budget: ₹{budget} <br></br>Total expenses: ₹{totalExpenses} <br></br>Remaining budget: ₹{remainingBudget}</p>
    </div>
  );
}

export default BudgetSummary;
