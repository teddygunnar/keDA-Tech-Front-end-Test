import React, { useState } from "react";

const RadioSubComponent = () => {
  const [checked, setChecked] = useState(1);

  return (
    <div>
      <div className="flex-box">
        <h6>Text Field Component</h6>
        <div className="radioSubcomponent">
          <input
            type="radio"
            id="radio_margin"
            value={1}
            checked={checked === 1}
            onChange={(e) => setChecked(Number(e.target.value))}
          />
          <input
            type="text"
            className="input"
            placeholder="Heya :D"
            disabled={checked !== 1}
          />
        </div>
      </div>
      <div className="flex-box">
        <h6>Date Field Component</h6>
        <div className="radioSubcomponent">
          <input
            type="radio"
            id="radio_margin"
            value={2}
            checked={checked === 2}
            onChange={(e) => setChecked(Number(e.target.value))}
          />
          <input type="date" className="date" disabled={checked !== 2} />
        </div>
      </div>
      <div className="flex-box">
        <h6>Dropdown Component</h6>
        <div className="radioSubcomponent">
          <input
            type="radio"
            id="radio_margin"
            value={3}
            checked={checked === 3}
            onChange={(e) => setChecked(Number(e.target.value))}
          />
          <select className="dropdown" disabled={checked !== 3}>
            <option>Radio 1</option>
            <option>Radio 2</option>
            <option>Radio 3</option>
          </select>
        </div>
      </div>
      <div className="flex-box">
        <h6>Checkbox Component</h6>
        <div className="radioSubcomponent">
          <input
            type="radio"
            id="radio_margin"
            value={4}
            checked={checked === 4}
            onChange={(e) => setChecked(Number(e.target.value))}
          />
          <div className="checkbox-container">
            <div>
              <input type="checkbox" id="checkbox1" disabled={checked !== 4} />
              <label htmlFor="checkbox1">Checkbox 1</label>
            </div>
            <div>
              <input type="checkbox" id="checkbox2" disabled={checked !== 4} />
              <label htmlFor="checkbox2">Checkbox 2</label>
            </div>
            <div>
              <input type="checkbox" id="checkbox3" disabled={checked !== 4} />
              <label htmlFor="checkbox3">Checkbox 3</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioSubComponent;
