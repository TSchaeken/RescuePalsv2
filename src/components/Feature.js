import React from 'react';

const Feature = ({ featured }) => {
  if (!featured)
    return (
      <div className="feature-container">
        <h1>Featuring...</h1>
      </div>
    );

  const summaryPlaceholder =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi quisquam itaque perferendis quo aliquam dignissimos corporis natus, in commodi nobis, excepturi, ea laborum incidunt doloribus!';
  return (
    <div className="feature-container">
      <div className="info-container">
        <div className="text-info">
          <div className="feature-name">
            <p>Featuring {featured.animalName.toLowerCase()}!</p>
          </div>
          <div className="feature-description">
            {/* <p>{featured.animalDescriptionPlain}</p> */}
            <p>{featured.animalSummary ? featured.animalSummary : summaryPlaceholder}</p>
          </div>
          <button className="button -purple" type="button">
            See more of {featured.animalName.toLowerCase()}
          </button>
        </div>
        <div className="picture">
          <img src={featured.animalPictures[0].urlInsecureFullsize} alt="Featured animal" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
