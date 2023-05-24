import React, { useState } from "react";

import PhotoListItem from "./components/PhotoListItem";
import PhotoList from "./components/PhotoList";
import PhotoFavButton from "./components/PhotoFavButton";
import TopicListItem from "./components/TopicListItem";
import TopicList from "./components/TopicList";
import TopNavigation from "./components/TopNavigationBar";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

import { ACTIONS, useApplicationData } from "./hooks/useAppData";

import "./App.scss";
const App = () => {
  const {
    showModal,
    clickedPhoto,
    favPhotos,
    handlePhotoClick,
    closeModal,
    addFavPhoto,
    removeFavPhoto,
    topicsData,
    photosData,
    updateTopic,
    resetTopic,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={topicsData}
        photos={photosData}
        onPhotoClick={handlePhotoClick}
        favPhotos={favPhotos}
        addFavPhoto={addFavPhoto}
        removeFavPhoto={removeFavPhoto}
        updateTopic={updateTopic}
        resetTopic={resetTopic}
      />
      {showModal && (
        <PhotoDetailsModal
          clickedPhoto={clickedPhoto}
          onClose={closeModal}
          photos={photosData}
          favPhotos={favPhotos}
          addFavPhoto={addFavPhoto}
          removeFavPhoto={removeFavPhoto}
        />
      )}
    </div>
  );
};

export default App;
