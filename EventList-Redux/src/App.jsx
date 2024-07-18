import React, { useEffect, useState, useContext } from "react";
import { useDispatch } from 'react-redux';
import { setEvents, showAddForm} from "./redux/reducers/eventReducer";
import EventList from "./Components/EventList";
import "./App.css"

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:3000/events")
        .then((data) => data.json())
        .then((res) => dispatch(setEvents(res)))
        .catch((error) => console.error("Error fetching data:", error));
    };
    fetchData();
  }, []);


  const handleAddNewEvent = () => {
    dispatch(showAddForm());
  };

  return (
    <div className="container">
      <button onClick={handleAddNewEvent} className="add-btn">
        Add New Event
      </button>
      <EventList />
    </div>
  );
};

export default App;
