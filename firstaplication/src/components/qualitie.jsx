import React from "react";

const Qualitie = ({ color, name }) => {
  const classes = "badge bg-" + color;

  return <span className={classes}>{name}</span>;
};

export default Qualitie;
