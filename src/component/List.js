import React from "react";

// Data
import events from "../events";

//
import Element from "./Element";

//  style
import { ListWrapper } from "../styles";

const List = () => {
  const eventList = events.map((event) => (
    <Element event={event} key={event.id} />
  ));

  return <ListWrapper>{eventList}</ListWrapper>;
};

export default List;
