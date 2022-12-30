import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { currency, budget, dispatch } = useContext(AppContext);

  const [budgetGUI, setBudgetGUI] = useState(budget);

  const handleChangeBudget = (e) => {
    setBudgetGUI(e.target.value);
    dispatch({
      type: "SET_BUDGET",
      payload: e.target.value,
    });
  };

  return (
    <div className="alert alert-secondary">
      <label htmlFor="budget">Budget: {currency}</label>
      <input
        onChange={(e) => handleChangeBudget(e)}
        type="number"
        id="budget"
        value={budgetGUI}
        name="budget"
      />
      {/* <button>Increase Budget</button> */}
    </div>
  );
};

export default Budget;
