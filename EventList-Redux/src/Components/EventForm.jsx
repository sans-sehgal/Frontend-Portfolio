import React, { useState, useContext } from "react";
import { useDispatch } from 'react-redux';
import { handleAddEvent } from "../apis/eventApis";
import { updateEvent, addEvent, cancelEdit, hideForm } from "../redux/reducers/eventReducer";

// import { EventContext } from "../Context/EventContext";

const EventForm = ({
  event = null,
}) => {
  // const { events, cancelEvent, addEvent } = useContext(EventContext);
  const dispatch = useDispatch();




  let initialName = "";
  let initialStart = "";
  let initialEnd = "";
  let editing = false;
  let eventId = null;

  if (event) {
    ({
      id: eventId,
      name: initialName,
      start: initialStart,
      end: initialEnd,
      editing,
    } = event);
  }
  const [name, setName] = useState(initialName || "");
  const [start, setStart] = useState(initialStart || "");
  const [end, setEnd] = useState(initialEnd || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await handleAddEvent({ name, start, end, id: eventId, editing })
    console.log(response)
    if (!editing) {
      dispatch(addEvent(response));
    } else {
      dispatch(updateEvent(response));
    }
  
    setName("");
    setStart("");
    setEnd("");
  };

  const handleCancelEvent = (eventId) => {
    if (eventId === null) {
      dispatch(hideForm());
    } else {
      dispatch(cancelEdit(eventId));
    }
  };

  return (
    <tr>
      <td>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Event Name"
          required
        />
      </td>
      <td>
        <input
          type="date"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          required
        />
      </td>
      <td>
        <input
          type="date"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          required
        />
      </td>
      {editing ? (
        <>
          <td className="actions">
            <button onClick={handleSubmit}>Save</button>
            <button
              onClick={() =>
                // cancelEvent({ name, start, end, id: eventId, editing })
                handleCancelEvent(eventId)

              }
            >
              Cancel
            </button>
          </td>
        </>
      ) : (
        <td className="actions">
          <button onClick={handleSubmit}>Add</button>
          <button
            onClick={() =>
              // cancelEvent({ name, start, end, id: eventId, editing })
              handleCancelEvent(eventId)
            }
          >
            Cancel
          </button>
        </td>
      )}
    </tr>
  );
};

export default EventForm;
