import React from 'react';
import ExpenseForm from './ExpenseForm';

function ExpenseItem({ expense }) {
return (
<li>
<div>
<strong>{expense.name}</strong>
<div style={{backgroundColor: "black",color:"white" , width: '50%' , padding: '10px',boxShadow: '0px 2px 3px gold'}}>₹{expense.amount} - {expense.category}</div>
</div> 
</li>
);
}

export default ExpenseItem;