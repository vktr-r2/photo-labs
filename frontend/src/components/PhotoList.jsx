import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

import brokenHeart from "../assets/image-from-rawpixel-id-3854883-png.png";

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

    // Check if filteredPhotos array is empty and showFavOnly is true
    filteredPhotos.length === 0  && showFavOnly === true
      ? // Advise user no fav photos found for filter
        (photosToDisplay = (
          <div className="photo-list-empty">
            <img className="photo-list-empty-icon" src={brokenHeart} alt="Broken heart icon" />
            <p className="photo-list-empty-text">
              Oh no!
            </p>
            <p className="photo-list-empty-text">You have no favourites here yet ...</p>
            <p className="photo-list-empty-attrib">Image by rawpixel.com</p>
          </div>
        ))
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
