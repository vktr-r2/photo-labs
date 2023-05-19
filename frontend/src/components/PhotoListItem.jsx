import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { imageSource, username, id, hideUserName } = props;

  return (
    <div className="photo-list--item">
      <PhotoFavButton/>
      <img
        id={id}
        // hideUserName={hideUserName}
        src={imageSource}
        alt="photo-description"
        className="photo-list--image"
      />
      <p className="photo-list--user-profile photo-list--user-info">
        {username}
      </p>
    </div>
  );
};

// PhotoListItem.defaultProps = {
//   username: "Jacob",
//   imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//   id: 1,
//   hideUserName: false,
// };

export default PhotoListItem;
