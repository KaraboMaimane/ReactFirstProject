import React, {ReactElement} from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props: any) => {
    const renderExpenses = (): ReactElement => {
        if(props.filteredExpenses.length > 0){
            return props.filteredExpenses.map((expense: any) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ));
        } else {
            return <p className={'expenses-list__fallback'}>No expenses found</p>;
        }
    }

    return renderExpenses();
}

export default ExpensesList;