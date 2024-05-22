import React, { useState } from "react";

function BudgetForm(props) {
  const [budget, setBudget] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!budget) return;
    props.onSubmit(parseInt(budget));
    setBudget("");
  }

  return (
    <div className="spaced">
      <form onSubmit={handleSubmit}>
        <label class="bud">
          Budget <br></br>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Enter your Budget"
          />
        </label>
        <button type="submit">Set Budget</button>
      </form>
    </div>
  );
}

export default BudgetForm;