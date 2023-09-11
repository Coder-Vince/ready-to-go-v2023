import React from "react";

const Depart = ({ takeOff }) => {
  return <span>{takeOff ? "Go!" : "No Way!"}</span>;
};

export default Depart;
