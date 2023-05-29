import React from 'react';
import React, { useState } from 'react';
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // or any other library for making HTTP requests

const [events, setEvents] = useState([]);

const [eventName, setEventName] = useState('');
const [eventDate, setEventDate] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  setEventName(e.target.elements.eventName.value);
  setEventDate(e.target.elements.eventDate.value);
};

useEffect(() => {
  axios.get('https://api.example.com/events')
    .then(response => {
      setEvents(response.data);
    })
    .catch(error => {
      console.error('Error fetching events:', error);
    });
}, []);

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

  <div>
    <h2>Events</h2>
    <ul>
      {events.map(event => (
        <li key={event.id}>{event.name}</li>
      ))}
    </ul>
  </div>
);
export default Event;

