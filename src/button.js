import React, { useState } from "react";
import "./App.css";

const Red_button = () => {
  const [active, setActive] = useState(false);

  const classToggle = () => {
    setActive(!active);
  };

  return (
    <div>
      <h1 className={active ? "red" : ""}>Hello,world!</h1>
      <button onClick={classToggle}>classNameをつけたり外したりする</button>
    </div>
  );
};

export default Red_button;
