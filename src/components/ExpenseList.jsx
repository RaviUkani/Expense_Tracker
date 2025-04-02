const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div className="expense-table">
      {expenses.length === 0 ? (
        <p>No expenses added.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Amount (₹)</th>
              <th>Category</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>{expense.description}</td>
                <td>
                  <button onClick={() => deleteExpense(expense.id)} className="delete-btn">
                    ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpenseList;
