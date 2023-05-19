import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { imageSource, username, id, description, isFav, onFavClick, onUnFavClick } = props;

  return (
    <div className="photo-list--item">
      <PhotoFavButton
        isFav={isFav} //Boolean set in PhotoList
        onFavClick={onFavClick}  //handler functions for favouriting/unfavouriting a photo
        onUnFavClick={onUnFavClick}
      />
      <img
        id={id}
        src={imageSource}
        alt={description}
        className="photo-list--image"
      />
      <p className="photo-list--user-profile photo-list--user-info">
        {username}
      </p>
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

