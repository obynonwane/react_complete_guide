import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  //state update
  useState();

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
