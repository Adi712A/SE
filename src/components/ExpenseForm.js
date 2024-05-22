import React, { useState } from 'react';

function ExpenseForm(props) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit({
      title: title,
      amount: Number(amount),
      category: category,
      date: new Date(date)
    });
    setTitle('');
    setAmount('');
    setCategory('');
    setDate('');
  }

  return (
    <form onSubmit={handleSubmit}>
      
      <div className="form-control">
        <label>Amount</label>
        <input placeholder='Enter your Amount' type="number" min="0" step="0" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      </div>
      <div className="form-control">
        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">Select Category</option>
        <option value="Groceries">Groceries</option>
        <option value="Transportation">Transportation</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Outside Food">Outside Food</option>
        <option value="House Bill">House Rent/Bill</option>
        <option value="Costumes/Clothes">Costumes/Clothes</option>
        <option value="Other">Other</option>
      </select> 
      </div>
      <div>
        <label>Date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div className="form-actions">
        <button type="submit" >Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
