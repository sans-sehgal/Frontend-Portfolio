import { handleAddEvent, handleDeleteEvent } from "../../apis/eventApis";

const SET_EVENTS = 'SET_EVENTS';
const SHOW_FORM = 'SHOW_FORM';
const HIDE_FORM = 'HIDE_FORM';
const ADD_EVENT = 'ADD_EVENT';
const UPDATE_EVENT = 'UPDATE_EVENT';
const DELETE_EVENT = 'DELETE_EVENT';
const EDIT_EVENT = 'EDIT_EVENT';
const CANCEL_EDIT = 'CANCEL_EDIT';

const initialState = {
    events: [],
    showForm: false,
};

// Actions

export const setEvents = (events) => ({
  type: SET_EVENTS,
  payload: events,
});

export const showAddForm = () => ({
  type: SHOW_FORM,
});

export const hideForm = () => ({
  type: HIDE_FORM,
});

export const addEvent = (event) => ({
  type: ADD_EVENT,
  payload: event,
});

export const updateEvent = (event) => ({
  type: UPDATE_EVENT,
  payload: event,
});

export const deleteEvent = (eventId) => ({
  type: DELETE_EVENT,
  payload: eventId,
});

export const editEvent = (eventId) => ({
  type: EDIT_EVENT,
  payload: eventId,
});

export const cancelEdit = (eventId) => ({
  type: CANCEL_EDIT,
  payload: eventId,
});

export const addUserAsync = (event) => {
  return async (dispatch) => {
    try {
      const response = await handleAddEvent(event)
      if (!event.editing) {
        dispatch(addEvent(response));
      } else {
        dispatch(updateEvent(response));
      }
    }catch (error) {
      console.error("Error deleting event:", error);
    }
  }
  
};

export const handelDeleteAsync = (id) => {
  return async (dispatch) => {
    try {
      const response = await handleDeleteEvent(id);
      if (response.id) {
        dispatch(deleteEvent(id));
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };
};

// Reducer

const eventReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_EVENTS:
        return {
          ...state,
          events: action.payload,
        };
      case SHOW_FORM:
        return {
          ...state,
          showForm: true,
        };
      case HIDE_FORM:
        return {
          ...state,
          showForm: false,
        };
      case ADD_EVENT:
        return {
          ...state,
          events: [...state.events, action.payload],
          showForm: false,
        };
      case UPDATE_EVENT:
        return {
          ...state,
          events: state.events.map(event =>
            event.id === action.payload.id ? action.payload : event
          ),
        };
      case DELETE_EVENT:
        return {
          ...state,
          events: state.events.filter(event => event.id !== action.payload),
        };
      case EDIT_EVENT:
        return {
          ...state,
          events: state.events.map(event =>
            event.id === action.payload ? { ...event, editing: true } : event
          ),
        };
      case CANCEL_EDIT:
        return {
          ...state,
          events: state.events.map(event =>
            event.id === action.payload ? { ...event, editing: false } : event
          ),
        };
      default:
        return state;
    }
};


  
export default eventReducer;

  