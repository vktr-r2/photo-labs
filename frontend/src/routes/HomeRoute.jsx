import React from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = (props) => {
  const {
    topics, //Mock topic data
    photos, //Mock photo data
    onPhotoClick, //Function to handle photo click for modal design
    favPhotos, //Object that passes list of favourited photos down to FavIcon
    addFavPhoto, //Function that adds photo to favPhotos Obj
    removeFavPhoto, //Function that removes photo from favPhotos Obj
    currentTopic,  //State manages current topic selected
    updateTopic, //Function captures topic ID for API call in useAppData.jsx
    resetTopic, //Function resets the state of topic back to undefined to remove filter
    showFavOnly, //State manages favourites filter
    toggleShowFavOnly, //Function toggles showFavOnly state on/off
  } = props;

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favPhotos={favPhotos}
        currentTopic={currentTopic}
        updateTopic={updateTopic}
        resetTopic={resetTopic}
        toggleShowFavOnly={toggleShowFavOnly}
      />
      <PhotoList
        photos={photos}
        favPhotos={favPhotos}
        addFavPhoto={addFavPhoto}
        removeFavPhoto={removeFavPhoto}
        onPhotoClick={onPhotoClick}
        showFavOnly={showFavOnly}
        currentTopic={currentTopic}
      />
    </div>
  );
};

export default HomeRoute;
