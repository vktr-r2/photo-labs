import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const {
    photos,
    favPhotos,
    showFavOnly,
    addFavPhoto,
    removeFavPhoto,
    onPhotoClick,
  } = props;

  // Declare a variable to hold the content that will be displayed.
  let photosToDisplay;

  if (Array.isArray(photos)) {
    const filteredPhotos = photos.filter(
      (photo) => !showFavOnly || favPhotos[photo.id]
    );

    // Check if filteredPhotos array is empty
    filteredPhotos.length === 0
      ? // Advise user no fav photos found for filter
        (photosToDisplay = <div className="photo-list-empty">No favourites here yet ...</div>)
      : // If there are photos, map them to PhotoListItem components
        (photosToDisplay = filteredPhotos.map((photo) => {
          return (
            <PhotoListItem
              id={photo.id}
              key={photo.id}
              username={photo.user.username}
              imageSource={photo.urls.regular}
              description={photo.description}
              avatar={photo.user.profile}
              city={photo.location.city}
              country={photo.location.country}
              isFav={favPhotos[photo.id]}
              onFavClick={() => addFavPhoto(photo.id)}
              onUnFavClick={() => removeFavPhoto(photo.id)}
              onPhotoClick={onPhotoClick}
            />
          );
        }));
  }

  return <ul className="photo-list">{props.children || photosToDisplay}</ul>;
};

export default PhotoList;
