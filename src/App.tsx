import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";

export interface IExpense{
  id: string;
  title: string;
  amount: number;
  date: Date;
}

const DUMMY_EXPENSES:IExpense[] = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const logToDevConsole = (message: any, bgColor = 'white', textColor = 'green') => {
    if (typeof message === 'string') {
      if(bgColor && textColor){
        console.log(`%c ${message}`, `background: ${bgColor}; color: ${textColor};`);
      } else {
        console.log(`%c ${message}`, `background: ${bgColor}; color: ${textColor};`);
      }
      console.log(message);
    } else if (typeof message === 'object') {

      for (const msg of message) {
        if (bgColor || textColor) {
          const arrStyles = [];
          if (bgColor) {
            arrStyles.push(`background-color: ${bgColor}`);
          }
          if (textColor) {
            arrStyles.push(`color: ${textColor}`);
          }
          const styleString = arrStyles.join(';');

          if (typeof msg !== 'object') {
            console.log(`%c${msg}`, styleString);
          } else {
            console.log(msg);
          }

        } else {
          console.log(msg);
        }

      }
    }
}

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense: any) => {

    //updating a state
    setExpenses((prevExpenses) => {

      console.log(expense, prevExpenses);

      return [expense, ...prevExpenses];
    });


    console.log('In app.js');
    logToDevConsole(['test', expense], 'red', 'white');
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
