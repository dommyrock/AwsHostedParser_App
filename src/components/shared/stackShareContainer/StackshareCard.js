import React from "react";

const StackShareCard = ({ link, imgUrl }) => {
  return (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div>
          <img src={imgUrl} />
        </div>
      </a>
    </div>
  );
};

export default StackShareCard;
