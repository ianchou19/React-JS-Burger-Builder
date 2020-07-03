import React from "react";

const button = (props) => (
  <button
    className={[clasess.Button, classes[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
