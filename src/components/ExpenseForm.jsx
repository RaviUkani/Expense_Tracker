import { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !category || !description) return;

    addExpense({ id: Date.now(), amount, category, description });
    setAmount("");
    setCategory("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;