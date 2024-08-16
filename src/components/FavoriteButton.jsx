import React from "react";

export const FavoriteButton = ({ children, icon, onClickHandler }) => {
  return (
    <button className="favorite-button" onClick={onClickHandler}>
      <img className="heart-icon" alt="" src={icon} />
      {children}
    </button>
  );
};
