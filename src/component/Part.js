import React from "react";

//  style
import { Evants } from "../styles";

const Part = (props) => {
  const event = props.event;
  return (
    <Evants>
      <h1>{event.mounth}</h1>
      <h2>{event.details}</h2>
    </Evants>
  );
};

export default Part;
