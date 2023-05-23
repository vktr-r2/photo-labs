import React from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = (props) => {
  const {
    topics,  //Mock topic data
    photos,  //Mock photo data
    onPhotoClick, //Function to handle photo click for modal design
    favPhotos,  //Object that passes list of favourited photos down to FavIcon
    addFavPhoto,  //Function that adds photo to favPhotos Obj
    removeFavPhoto, //Function that removes photo from favPhotos Obj
    updateTopic
  } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favPhotos={favPhotos} updateTopic={updateTopic} />
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
