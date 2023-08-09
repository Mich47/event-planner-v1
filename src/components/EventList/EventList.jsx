import { useSelector } from "react-redux";
import { EventCard } from "../EventCard/EventCard";
import { List } from "./EventList.styled";
import { selectSearchValue } from "../../redux/events/events.selectors";
import { useEffect, useState } from "react";

export const EventList = ({ events }) => {
  const searchValue = useSelector(selectSearchValue);

  const [filteredEvents, setFilteredEvents] = useState(events);

  useEffect(() => {
    setFilteredEvents(
      events.filter(
        ({ title, description, location }) =>
          title.toLowerCase().includes(searchValue) ||
          description.toLowerCase().includes(searchValue) ||
          location.toLowerCase().includes(searchValue)
      )
    );
  }, [events, searchValue]);

  return (
    <List>
      {filteredEvents.map((event) => (
        <li key={event.id}>
          <EventCard event={event} />
        </li>
      ))}
    </List>
  );
};
