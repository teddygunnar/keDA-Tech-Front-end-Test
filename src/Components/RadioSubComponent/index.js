import React, { useState } from "react";
import TextField from "./TextField";
import Date from "./Date";
import Dropdown from "./Dropdown";
import Checkbox from "./Checkbox";

const RadioSubComponent = () => {
  const [checked, setChecked] = useState(1);

  return (
    <div>
      <div
        className={`border-hover ${checked === 1 ? "selected" : null}`}
        onClick={() => setChecked(1)}
      >
        <TextField checked={checked} setChecked={setChecked} id={1} />
      </div>
      <div
        className={`border-hover ${checked === 2 ? "selected" : null}`}
        onClick={() => setChecked(2)}
      >
        <Date checked={checked} setChecked={setChecked} id={2} />
      </div>
      <div
        className={`border-hover ${checked === 3 ? "selected" : null}`}
        onClick={() => setChecked(3)}
      >
        <Dropdown checked={checked} setChecked={setChecked} id={3} />
      </div>
      <div
        className={`border-hover ${checked === 4 ? "selected" : null}`}
        onClick={() => setChecked(4)}
      >
        <Checkbox checked={checked} setChecked={setChecked} id={4} />
      </div>
    </div>
  );
};

export default RadioSubComponent;
