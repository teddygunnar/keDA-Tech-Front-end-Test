import React from "react";

const Dropdown = ({ checked, setChecked, id }) => {
  return (
    <div className="flex-box">
      <h6>Dropdown Component</h6>
      <div className="radioSubcomponent">
        <input
          type="radio"
          id="radio_margin"
          value={id}
          checked={checked === id}
          onChange={(e) => setChecked(Number(e.target.value))}
        />
        <select className="dropdown" disabled={checked !== id}>
          <option>Radio 1</option>
          <option>Radio 2</option>
          <option>Radio 3</option>
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
