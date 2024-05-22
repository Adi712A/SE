import React from 'react';

function SavingSuggestions({ expenses, remainingBudget }) {
  const totalExpenses = expenses.reduce((acc, cur) => acc + cur.amount, 0);

  let suggestion = '';

  if (remainingBudget < 0) {
    suggestion = 'You have exceeded your budget.';
  } else if (remainingBudget >= totalExpenses / 2) {
    suggestion = 'Great job! You are on track with your budget.';
  } else if (remainingBudget >= totalExpenses/3){
    suggestion = 'You can still save more. Try reducing your expenses.';
  }
    else {
    suggestion ='Be Alert And This Kind Of Expenditure Is Not Good.';  
  }

  return (
    <div>
      <h2>Saving Suggestions</h2>
      <p style={{backgroundColor: "black",color:"white" ,borderRadius:"10px", width: '50%' , padding: '10px',boxShadow: '0px 2px 3px gold'}}>{suggestion}</p>
    </div>
  );
}

export default SavingSuggestions;
