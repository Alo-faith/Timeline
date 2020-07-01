import React from "react";

//  style
import { Evants, Liner, LinerR } from "../styles";

const Element = (props) => {
  const event = props.event;

  if (event.id % 2 === 1) {
    return (
      <Liner>
        <Evants>
          <img src={event.imgage} alt={event.mounth}></img>
          <h1>{event.mounth}</h1>
          <h2>{event.details}</h2>
        </Evants>
      </Liner>
    );
  } else {
    return (
      <LinerR>
        <Evants className="r">
          <img src={event.imgage} alt={event.mounth}></img>
          <h1>{event.mounth}</h1>
          <h2>{event.details}</h2>
        </Evants>
      </LinerR>
    );
  }
};

export default Element;
