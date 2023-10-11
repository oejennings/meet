// src/components/Event.js

import { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
    return (
      <li className="event">
        <h2>{event.summary}</h2>
        <p>{event.created}</p>
        <p>{event.location}</p>
        <button 
          className="detailsbtn"
          onClick= {() => {
            setShowDetails(!showDetails)
          }}
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails ? (
          <div className="details">
            <h2>Event Details</h2>
            <p>Description: {event.description}</p>
          </div>
        ): null}
      </li>
    );
  }
  
  export default Event;