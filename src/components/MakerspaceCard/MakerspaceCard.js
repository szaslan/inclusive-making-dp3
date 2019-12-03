import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MakerspaceCard.css";
const MakerspaceCard = ({ name, picture, alt, bio, route }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="makerspace-card__container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/makerspaces${route}`}>
        <div className="makerspace-card__picture__container">
          <img src={picture} alt={alt} className="makerspace-card__picture" />
          {isHovered && (
            <div className="makerspace-card__picture--hover">See the space</div>
          )}
        </div>
        <div className="makerspace-card__text">
          <h3>{name}</h3>
          <p>{bio}</p>
        </div>
      </Link>
    </div>
  );
};

export default MakerspaceCard;
