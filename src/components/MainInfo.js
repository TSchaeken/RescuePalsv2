import React from 'react';

const Info = () => {
  const dateTransform = offset => {
    const date = new Date();
    return date.toLocaleDateString('en-US');
  };
  return (
    <div className="event-container">
      <h1>Upcoming Events!</h1>
      <div className="event-organize">
        <div className="row">
          <div className="event-dates">
            <p>{dateTransform()}</p>
          </div>
          <div className="event-details">
            <p>This is going to be an amazing event you don't want to miss.</p>
          </div>
        </div>
        <div className="row">
          <div className="event-dates">
            <p>{dateTransform()}</p>
          </div>
          <div className="event-details">
            <p>This one is great too!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
