import React, { useState } from "react";

import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

import { useApplicationData } from "./hooks/useAppData";

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
    showFavOnly,
    toggleShowFavOnly,
    
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
        showFavOnly={showFavOnly}
        toggleShowFavOnly={toggleShowFavOnly}
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
