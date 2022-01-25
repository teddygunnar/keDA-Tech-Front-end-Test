import React from "react";

const Date = ({ checked, setChecked, id }) => {
  return (
    <div className="flex-box">
      <h6>Date Field Component</h6>
      <div className="radioSubcomponent">
        <input
          type="radio"
          id="radio_margin"
          value={id}
          checked={checked === id}
          onChange={(e) => setChecked(Number(e.target.value))}
        />
        <input type="date" className="date" disabled={checked !== id} />
      </div>
    </div>
  );
};

export default Date;
