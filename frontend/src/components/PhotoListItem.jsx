import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {
    imageSource,
    username,
    id,
    description,
    avatar,
    city,
    country,
    isFav,
    onFavClick,
    onUnFavClick,
    onPhotoClick,
    isClickable = true, //Ensures onClick listener function will be called
  } = props;

  return (
    <div className="photo-list--item">
      <PhotoFavButton
        isFav={isFav} //Boolean set in PhotoList
        onFavClick={onFavClick} //handler functions for favouriting/unfavouriting a photo
        onUnFavClick={onUnFavClick}
      />
      <img
        id={id}
        src={imageSource}
        alt={description}
        className="photo-list--image"
        onClick={() => isClickable && onPhotoClick(props)}
      />
      <div className="photo-list--details--parent">
        <img src={avatar} className="photo-list--user-profile" />
        <div className="photo-list--user-details">
          <p className="photo-list--user-info">
            {username}
          </p>
          <p className="photo-list--user-location">
            {city}, {country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;

// PhotoListItem.defaultProps = {
//   username: "Jacob",
//   imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//   id: 1,
//   hideUserName: false,
// };
