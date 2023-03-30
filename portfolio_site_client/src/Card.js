import React from 'react';
import './styles/card.css';

function Card({ title, description, imgSrc, githubLink }) {
  return (
    <div className="card">
      {imgSrc && (
        <img src={imgSrc} alt={`${title} project`} className="card-image" />
      )}
      {imgSrc && <div className="card-divider"></div>}
      <div className="card-content">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            GitHub Link
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;
