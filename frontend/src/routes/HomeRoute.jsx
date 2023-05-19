import React, { useState, useCallback } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';


//HomeRoute takes props topics and photos data from App.jsx
const HomeRoute = (props) => {
  //Destructure data into variables
  const {topics, photos} = props;

  // set useState to empty obj | assign empty obj state to favPhotos | declare setFavPhotos function to update state
  const [favPhotos, setFavPhotos] = useState({});

  // addFavPhoto takes a photoId as its arg
  const addFavPhoto = (photoId) => {
    //prevFavPhotos equals the current state of favPhotos object (default functionality from setFavPhotos)
    setFavPhotos(prevFavPhotos => {
      //updatedFavPhotos equals a copy of prevFavPhotos(current state) and adds [photoId] (from the liked photo):true property to signal that the photo is favourited
      const updatedFavPhotos = { ...prevFavPhotos, [photoId]: true };
      // console.log(updatedFavPhotos); // TEST Print updated state of favPhotos after favouriting a photo (WORKS)
      //return updatedFavPhotos as the new state for favPhotos
      return updatedFavPhotos;
    });
  };


  return (
    <div className="home-route">
      <TopNavigation topics={topics}/>
      <PhotoList 
        photos={photos} 
        favPhotos={favPhotos} 
        addFavPhoto={addFavPhoto} 
      />
    </div>
  );
}

export default HomeRoute;
