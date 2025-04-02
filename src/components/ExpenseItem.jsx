const ExpenseItem =({expense, deleteExpense}) =>{
    return(
        <div>
            <p>{expense.category}: ₹{expense.amount} - {expense.description}</p>
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
        </div>
    );

}

export default ExpenseItem