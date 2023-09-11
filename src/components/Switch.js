import React from "react";

const Switch = ({ switchB, setSwitch }) => {
  const handleClick = () => {
    console.log(switchB);
    setSwitch(!switchB);
  };

  return (
    <div>
      <button className={switchB ? "not" : "started"} onClick={handleClick}>
        ON
      </button>
      <button className={switchB ? "started" : "not"} onClick={handleClick}>
        OFF
      </button>
    </div>
  );
};

export default Switch;
