import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

//HomeRoute takes props topics and photos data from App.jsx
const HomeRoute = (props) => {
  //Destructure data into variables
  const { topics, photos, onPhotoClick } = props;

  // set useState to empty obj | assign empty obj state to favPhotos | declare setFavPhotos function to update state
  const [favPhotos, setFavPhotos] = useState({});

  // addFavPhoto takes a photoId as its arg and adds the photoId to favPhotos state
  const addFavPhoto = (photoId) => {
    //prevFavPhotos equals the current state of favPhotos object (default functionality from setFavPhotos)
    setFavPhotos((prevFavPhotos) => {
      //updatedFavPhotos equals a copy of prevFavPhotos(current state) and adds [photoId] (from the liked photo):true property to signal that the photo is favourited
      const updatedFavPhotos = { ...prevFavPhotos, [photoId]: true };
      // console.log(updatedFavPhotos); // TEST Print updated state of favPhotos after favouriting a photo (WORKS)
      //return updatedFavPhotos as the new state for favPhotos
      return updatedFavPhotos;
    });
  };

  // removeFavPhoto takes a photoId as arg and removes the photoId key:value property from favPhoto state obj
  const removeFavPhoto = (photoId) => {
    ////prevFavPhotos equals the current state of favPhotos object
    setFavPhotos((prevFavPhotos) => {
      //Make a copy of current favPhotos object using spread operator
      const updatedFavPhotos = { ...prevFavPhotos };
      //Remove the key:value property associated with the photoId arguement
      delete updatedFavPhotos[photoId];
      // console.log(updatedFavPhotos); // TEST Print updated state of favPhotos after UNfavouriting a photo (WORKS)
      //return updatedFavPhotos as the new state for favPhotos
      return updatedFavPhotos;
    });
  };

  return (
    <div className="home-route">
      {/* Pass topics to display in nav bar and favPhotos state object */}
      <TopNavigation topics={topics} favPhotos={favPhotos} />

      {/* Pass photo data + functions to adjust favPhotos state */}
      <PhotoList
        photos={photos}
        favPhotos={favPhotos}
        addFavPhoto={addFavPhoto}
        removeFavPhoto={removeFavPhoto}
        onPhotoClick={onPhotoClick}
      />
    </div>
  );
};

export default HomeRoute;
