import { useState } from 'react';

//Import mock data from JSON files
import topics from '../mocks/topics.json';
import photos from '../mocks/photos.json';

const useApplicationData = () => {
  // showModal boolean state, handles if PhotoDetailsModal should render or not
  const [showModal, setShowModal] = useState(false);

  // clickedPhoto stores photo data for which photo is clicked, intended to be passed to PDModal
  const [clickedPhoto, setClickedPhoto] = useState(null);

  // favPhotos object intended to store which photos have been favourited.  Object properties formatted as [photo.id=TRUE]
  const [favPhotos, setFavPhotos] = useState({});

  // set mock data states to be passed down through components
  const [topicsData, setTopicsData] = useState(topics);
  const [photosData, setPhotosData] = useState(photos);

  // handePhotoClick uses photoProps of the clicked photo to capture photo details that need to be passed to PDModal
  const handlePhotoClick = (photoProps) => {
    // Change clickedPhoto state to the props captured by click
    setClickedPhoto(photoProps);
    // Change showModal boolean to TRUE to render component
    setShowModal(true);
  };

  // closeModal triggered on 'x' button click in the modal
  const closeModal = () => {  
    // showModal state set to FALSE so modal no longer rendered
    setShowModal(false);
    // empty the clickedPhoto state so no issues caused on next click of any photo
    setClickedPhoto(null);
  };

  // addFavPhoto takes a photoId as its arg and adds the photoId to favPhotos state
  const addFavPhoto = (photoId) => {
    // prevFavPhotos equals the current state of favPhotos object (default functionality from setFavPhotos)
    setFavPhotos((prevFavPhotos) => {
      // updatedFavPhotos equals a copy of prevFavPhotos(current state) and adds [photoId] (from the liked photo):true property to signal that the photo is favourited
      const updatedFavPhotos = { ...prevFavPhotos, [photoId]: true };
      // return updatedFavPhotos as the new state for favPhotos
      return updatedFavPhotos;
    });
  };

  // removeFavPhoto takes a photoId as arg and removes the photoId key:value property from favPhoto state obj
  const removeFavPhoto = (photoId) => {
    // prevFavPhotos equals the current state of favPhotos object
    setFavPhotos((prevFavPhotos) => {
      // Make a copy of current favPhotos object using spread operator
      const updatedFavPhotos = { ...prevFavPhotos };
      // Remove the key:value property associated with the photoId arguement
      delete updatedFavPhotos[photoId];
      // return updatedFavPhotos as the new state for favPhotos
      return updatedFavPhotos;
    });
  };

  return {
    showModal,
    clickedPhoto,
    favPhotos,
    handlePhotoClick,
    closeModal,
    addFavPhoto,
    removeFavPhoto,
    topicsData,
    photosData,
  };
};

export default useApplicationData;

