import React from "react";

const Checkbox = ({ checked, setChecked, id }) => {
  return (
    <div className="flex-box">
      <h6>Checkbox Component</h6>
      <div className="radioSubcomponent">
        <input
          type="radio"
          id="radio_margin"
          value={id}
          checked={checked === id}
          onChange={(e) => setChecked(Number(e.target.value))}
        />
        <div className="checkbox-container">
          <div>
            <input type="checkbox" id="checkbox1" disabled={checked !== id} />
            <label htmlFor="checkbox1">Checkbox 1</label>
          </div>
          <div>
            <input type="checkbox" id="checkbox2" disabled={checked !== id} />
            <label htmlFor="checkbox2">Checkbox 2</label>
          </div>
          <div>
            <input type="checkbox" id="checkbox3" disabled={checked !== id} />
            <label htmlFor="checkbox3">Checkbox 3</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
