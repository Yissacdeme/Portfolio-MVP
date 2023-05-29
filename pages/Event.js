import React from 'react';
import React, { useState } from 'react';

const [eventName, setEventName] = useState('');
const [eventDate, setEventDate] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  setEventName(e.target.elements.eventName.value);
  setEventDate(e.target.elements.eventDate.value);
};

function Event() {
  return (
    return (
  <div>
    <h2>Create Event</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Event Name:
        <input type="text" name="eventName" />
      </label>
      <label>
        Event Date:
        <input type="date" name="eventDate" />
      </label>
      <button type="submit">Create</button>
    </form>
    <p>Event Name: {eventName}</p>
    <p>Event Date: {eventDate}</p>
  </div>
);

    <div>
      <h2>Welcome to the Event Planner!</h2>
      {/* content here */}
    </div>
  );
}

export default Event;

