import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.67,
    date: new Date(2021, 8, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.67,
    date: new Date(2021, 8, 15),
  },
  {
    id: "e3",
    title: "Car Insureance",
    amount: 294.67,
    date: new Date(2021, 8, 16),
  },
  {
    id: "e4",
    title: "New Desk (wooden)",
    amount: 194.67,
    date: new Date(2021, 8, 17),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <div className="expenses">
          <Expenses items={expenses} />
        </div>
      </div>
    </div>
  );
};

export default App;
