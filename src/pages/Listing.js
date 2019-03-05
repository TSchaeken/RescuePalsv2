import React, { useEffect } from 'react';
import Card from '../components/Card';

export default function Listing({ data }) {
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <div className="adopt-container raised">
      {data.map(dog => (
        <Card dog={dog} />
      ))}
    </div>
  );
}
