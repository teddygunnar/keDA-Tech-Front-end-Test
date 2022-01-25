import React from "react";

const TextField = ({ checked, setChecked, id }) => {
  return (
    <div className="flex-box">
      <h6>Text Field Component</h6>
      <div className="radioSubcomponent">
        <input
          type="radio"
          id="radio_margin"
          value={id}
          checked={checked === id}
          onChange={(e) => setChecked(Number(e.target.value))}
        />
        <input
          type="text"
          className="input"
          placeholder="Heya :D"
          disabled={checked !== id}
        />
      </div>
    </div>
  );
};

export default TextField;
