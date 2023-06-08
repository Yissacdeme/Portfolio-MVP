import React from 'react';

function Home() {
  return (
    <div>
      <h2>Welcome to the Event Planner!</h2>
      {/* content here */}
    </div>
  );
}

export default Home;

function filterEvents(events, filters) {
  // Initialize an empty array to store filtered events
  const filteredEvents = [];

  // Iterate through each event
  for (let i = 0; i < events.length; i++) {
    const event = events[i];

    // Check if the event matches the filter criteria
    if (
      event.location === filters.location &&
      event.date === filters.date &&
      event.category === filters.category
    ) {
      // Add the event to the filtered events array
      filteredEvents.push(event);
    }
  }

  // Return the filtered events
  return filteredEvents;
}
