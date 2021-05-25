import React, { useState } from "react";

const StateComponent = () => {
  const [isGreen, setIsGreen] = useState(true);

  return (
    <div>
      <h1
        onClick={() => {
          setIsGreen(!isGreen);
        }}
        style={{ color: isGreen ? "limegreen" : "crimson" }}
      >
        useState Example
      </h1>
      <span>
        Click on the <i>useState Example</i> to toggle color
      </span>
    </div>
  );
};

export default StateComponent;
