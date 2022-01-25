import React, { useState } from "react";

const RadioLabels = ({ selected }) => {
  const arr = [1, 2, 3];
  const [checked, setChecked] = useState(1);

  return (
    <div className="radioWithLabelsContainer">
      {arr.map((val) => (
        <div className="radioWithLabelsDiv">
          <input
            id={val}
            className="radio_margin"
            type="radio"
            value={val}
            checked={checked === val}
            onChange={(e) => setChecked(Number(e.target.value))}
          />
          <label className="radioWithLabelsLabel" htmlFor={val}>
            Radio {val}
          </label>
        </div>
      ))}
      {checked === 3 ? (
        <div className="radioWithLabelsDiv">
          <input type="radio" className="radio_margin" id="4" />
          <label className="radioWithLabelsLabel" htmlFor="4">
            Radio 4
          </label>
        </div>
      ) : null}
    </div>
  );
};

export default RadioLabels;
