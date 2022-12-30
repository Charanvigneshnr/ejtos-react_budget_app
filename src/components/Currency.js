import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { expenses, dispatch } = useContext(AppContext);

  const CURRENCIES = [
    {name: "Pound", symbol: "£"},
    {name: "Dollar", symbol: "$"},
    {name: "Euro", symbol: "€"},
    {name: "Rupee", symbol: "₹"},

];

  const [currencyState, setCurrency] = useState("£ Pound");

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);

    dispatch({
        type: "CHG_CURRENCY",
        payload: e.target.value,
    });
}

  return (
    <div className="alert alert-primary">
      <select
          id="currency"
          value={currencyState}
          onChange={(e)=> { handleCurrencyChange(e) }}
        >
        
      	{CURRENCIES.map((currency)=>(
            <option key={currency.name} value={currency.symbol}>Currency ({ currency.symbol + " " + currency.name})</option>
        ))
        }
      </select>
    </div>
  );
};

export default Currency;
