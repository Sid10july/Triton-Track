import React, { useState, useContext } from "react";
import {AppContext } from '../../context/AppContext'; 


const AddExpenseForm = () => {
  // Exercise: Consume the AppContext here
  const { expenses, setExpenses } = useContext(AppContext);


  // Exercise: Create name and cost to state variables
  const [name, setName] = useState('');
  const [cost, setCost] = useState(0);

  

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Exercise: Add add new expense to expenses context array
    const newExpense  = {
      id: Date.now().toString(), 
      name, 
      cost: parseFloat(cost.toString())
    }; 
    setExpenses([...expenses, newExpense]);
    setName('');
    setCost(0);

  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            className="form-control"
            id="name"
            value={name}
            // HINT: onChange={}
            onChange={(e) => setName(e.target.value) }
          ></input>
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            required
            type="text"
            className="form-control"
            id="cost"
            value={cost}
            // HINT: onChange={}
            onChange={(e) => 
              {
                setCost(e.target.value === '' ? 0 : parseFloat(e.target.value) )
              }}
          ></input>
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
