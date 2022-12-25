import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget } = useContext(AppContext);

  return (
    <div className="alert alert-secondary">
      <label for="budget">Budget: £{budget}</label>
      {/* <input type="number" id="budget" name="budget"> */}
      <button>Increase Budget</button>
    </div>
  );
};

export default Budget;
