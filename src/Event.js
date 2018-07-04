import React from 'react';

const Event = props => (
  <div>
    <h3>{props.title}</h3>
    <p>Event Venue: {props.venue}</p>
    <p><small>{props.date}</small></p>
  </div>
)

export default Event