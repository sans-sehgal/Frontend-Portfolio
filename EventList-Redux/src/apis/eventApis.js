export const handleAddEvent = async (event) => {
    let response;
    try {
      if (event.editing) {
        event = { ...event, editing: false };
        response = await fetch(`http://localhost:3000/events/${event.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(event),
        });
  
        if (!response.ok) {
          throw new Error("Failed to update event: " + response.statusText);
        }
      } else {
        delete event.id;
        response = await fetch("http://localhost:3000/events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(event),
        });
  
        if (!response.ok) {
          throw new Error("Failed to add event: " + response.statusText);
        }
      }
  
      const data = await response.json();
      return data;
  
    } catch (error) {
      console.error("Error:", error);
    }
  };


  export const handleDeleteEvent = async (eventId) => {
    let response;
    try {
        response = await fetch(`http://localhost:3000/events/${eventId}`, {
        method: "DELETE",
      });

        if (!response.ok) {
            throw new Error("Failed to delete event: " + response.statusText);
        }
  
   
        const data = await response.json();
        return data;

  
    } catch (error) {
      console.error("Error:", error);
      throw error; // Re-throw the error to propagate it if needed
    }
  };
  