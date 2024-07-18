import React from "react";
import { deleteEvent, editEvent } from "../redux/reducers/eventReducer";
import { useDispatch } from 'react-redux';
import { handleDeleteEvent } from "../apis/eventApis";


const EventItem = ({ event }) => {
  const dispatch = useDispatch();

  const { name, start, end } = event;

  const handelDelete = async (id) => {
    const response = await handleDeleteEvent(id)
    if(response.id){
      dispatch(deleteEvent(id))
    }

  };



  const handleEditEvent = (eventId) => {
    dispatch(editEvent(eventId));
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{start}</td>
      <td>{end}</td>
      <td>
        <button onClick={() => handleEditEvent(event.id)}>Edit</button>
        <button onClick={() => handelDelete(event.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default EventItem;
