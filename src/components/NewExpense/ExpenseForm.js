import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <labe>Title</labe>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <labe>Amount</labe>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <labe>Date</labe>
          <input type="date" min="2019-12-12" max="2023-12-12" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
