import React from "react";

// Data
import events from "../events";

//
import Part from "./Part";

//  style
import { ListWrapper } from "../styles";

const List = () => {
  const eventList = events.map((event) => (
    <Part event={event} key={event.id} />
  ));

  return <ListWrapper>{eventList}</ListWrapper>;
};

export default List;
