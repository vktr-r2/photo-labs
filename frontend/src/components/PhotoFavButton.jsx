import React from "react";
import { FavIcon } from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const { isFav, onFavClick, onUnFavClick } = props;

  //Fill variable for FavIcon dependant on true/false value of isFav boolean
  const fill = isFav ? "#C80000" : "#EEEEEE";

  //handleClick function checks if photo is already favourited.  If true, call onUnFavClick, if false call onFavClick
  function handleClick() {
    if (isFav) {
      onUnFavClick();
    } else {
      onFavClick();
    }
  }

  return (
    <div className="photo-list--fav-icon" onClick={handleClick}>
      <div className="photo-list--fav-icon-svg">
        {/*Pass fill value to FavIcon as prop */}
        <FavIcon fill={fill} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
