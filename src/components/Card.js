import React from 'react';

export default function Card({ dog }) {
  return (
    <div className="card-container">
      <div className="flipper">
        <div className="card-front">
          <div className="card-image">
            <img src={dog.animalPictures[0].urlSecureFullsize} alt={dog.animalName} />
          </div>
        </div>
        <div className="card-back">
          <div className="card-info">{dog.animalName}</div>
          <button className="button" type="button">
            Get to know me!
          </button>
        </div>
      </div>
    </div>
  );
}
