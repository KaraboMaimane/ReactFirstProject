import React, {useState} from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import {IExpense} from "../../App";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props: any) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear: any) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense: IExpense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />

                <ExpensesChart expenses={filteredExpenses} />

                <ExpensesList filteredExpenses={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;
