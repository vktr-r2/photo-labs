import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  //Receive photos data, favPhotos state, and add/removeFavPhoto update functions as props from HomeRoute parent
  const { photos, favPhotos, addFavPhoto, removeFavPhoto, onPhotoClick } = props;

  //Declare new PhotoListComponentsArr, check if "photos" is array, if true then use .map to create each PhotoListItem component
  const PhotoListComponentsArr = Array.isArray(photos) && photos.map((photo) => {
    return (
      <PhotoListItem
        id={photo.id}
        key={photo.id}
        username={photo.user.username}
        imageSource={photo.urls.regular}
        description={photo.description}
        avatar={photo.user.avatar}
        city={photo.location.city}
        country={photo.location.country}
        isFav={favPhotos[photo.id]} // Boolean indicating whether photo is favourited based on whether photo.id exists in favPhotos obj
        onFavClick={() => addFavPhoto(photo.id)} // Pass function with photo.id as arg to addFavPhoto
        onUnFavClick={() => removeFavPhoto(photo.id)} // Pass function with photo.id as arg to removeFavPhoto
        onPhotoClick={onPhotoClick}
      />
    )
  });
  //props.children rendered here so PhotoList can render photos in PhotoDetailsModal.jsx
  return <ul className="photo-list">{props.children || PhotoListComponentsArr}</ul>;
};

export default PhotoList;

