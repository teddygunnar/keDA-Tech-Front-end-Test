import React, { useState } from "react";
import RadioLabels from "./Components/RadioLabels";
import RadioSubComponent from "./Components/RadioSubComponent";
import style from "./App.module.css";
const App = () => {
  const [selected, setSelected] = useState(1);

  return (
    <div className={style.container}>
      <div className={style.radio_container}>
        <div className={style.radio}>
          <input
            type="radio"
            id="radio_label"
            value={1}
            checked={selected === 1}
            onChange={(e) => setSelected(Number(e.target.value))}
          />
          <label htmlFor="radio_label">Radio With Label</label>
        </div>
        <div>
          <input
            type="radio"
            id="radio_label2"
            value={2}
            checked={selected === 2}
            onChange={(e) => setSelected(Number(e.target.value))}
          />
          <label htmlFor="radio_label2">Radio With Sub Component</label>
        </div>
      </div>
      <div className={style.component}>
        <div className={style.scrollable}>
          {selected === 1 ? <RadioLabels /> : <RadioSubComponent />}
        </div>
      </div>
    </div>
  );
};

export default App;
