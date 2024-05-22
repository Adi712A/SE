import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses }) {
  return (
    <div>
      <h2>Expenses</h2>
      {expenses.length > 0 ? (
        <ul>
          {expenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} />
          ))}
        </ul>
      ) : (
        <p style={{backgroundColor: "black",color:"white" ,borderRadius:"10px", width: '50%' , padding: '10px',boxShadow: '0px 2px 5px gold'}}>No expenses yet.</p>
      )}
    </div>
  );
}

export default ExpenseList;
