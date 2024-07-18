import React, { useContext } from "react";
import { useSelector, useDispatch } from 'react-redux';

import EventItem from "./EventItem";
import EventForm from "./EventForm";

const EventList = () => {
  const events = useSelector(state => state.event.events);
  const showForm = useSelector(state => state.event.showForm);
  return (
    <table>
      <thead>
        <tr>
          <th>Event</th>
          <th>Start</th>
          <th>End</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event) => {
          if (event.editing) {
            return <EventForm key={event.id} event={event} />;
          } else {
            return <EventItem key={event.id} event={event} />;
          }
        })}
        {showForm && <EventForm />}
      </tbody>
    </table>
  );
};

export default EventList;
