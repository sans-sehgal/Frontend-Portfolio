import React, { useState, useContext } from "react";
import { useDispatch } from 'react-redux';
import { cancelEdit, hideForm, addUserAsync } from "../redux/reducers/eventReducer";

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
    dispatch(addUserAsync({name, start, end, id: eventId, editing}));
    setName("");
    setStart("");
    setEnd("");
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
                dispatch(cancelEdit(eventId))

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
              dispatch(hideForm())

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
