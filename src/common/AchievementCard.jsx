import React, { useState } from 'react';

function AchievementCard({ title, organization, date, description, image }) {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="achievement-card">
      <div className="image-container" onClick={toggleDescription}>
        <img src={image} alt={`${title}`} />
        <div className="overlay">
          <span>{showDescription ? 'Click to hide' : 'Click to view details'}</span>
        </div>
      </div>
      <h3>{title}</h3>
      <p className="organization">{organization}</p>
      <p className="date">{date}</p>
      {showDescription && (
        <div className="description-popup">
          <p className="description">{description}</p>
        </div>
      )}
    </div>
  );
}

export default AchievementCard;