import React from "react";
import { handelDeleteAsync, editEvent } from "../redux/reducers/eventReducer";
import { useDispatch } from 'react-redux';


const EventItem = ({ event }) => {
  const dispatch = useDispatch();

  const { name, start, end } = event;

  
  return (
    <tr>
      <td>{name}</td>
      <td>{start}</td>
      <td>{end}</td>
      <td>
        <button onClick={() => dispatch(editEvent(event.id))}>Edit</button>
        <button onClick={() => dispatch(handelDeleteAsync(event.id))}>Delete</button>
      </td>
    </tr>
  );
};

export default EventItem;
