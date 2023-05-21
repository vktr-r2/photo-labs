import React, {useState} from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import PhotoFavButton from './components/PhotoFavButton';
import TopicListItem from './components/TopicListItem';
import TopicList from './components/TopicList';
import TopNavigation from './components/TopNavigationBar';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

import topics from './mocks/topics.json';
import photos from './mocks/photos.json';

import './App.scss';
const App = () => {

  //showModal boolean state, handles if PhotoDetailsModal should render or not
  const [showModal, setShowModal] = useState(false);
  //clickedPhoto stores photo data for which photo is clicked, intended to be passed to PhotoDetailsModal
  const [clickedPhoto, setClickedPhoto] = useState(null);
  //favPhotos object intended to store which photos have been favourited.  Object properties formatted as [photo.id=TRUE]
  const [favPhotos, setFavPhotos] = useState({});
  
  //handePhotoClick uses photoProps of the clicked photo to capture photo details that need to be passed to PDModal
  const handlePhotoClick = (photoProps) => {
    //Change clickedPhoto state to the props captured by click
    setClickedPhoto(photoProps);
    //Change showModal boolean to TRUE to render component
    setShowModal(true);
  };

  // closeModal triggered on 'x' button click in the modal
  const closeModal = () => {  
    //showModal state set to FALSE so modal no longer rendered
    setShowModal(false);
    //empty the clickedPhoto state so no issues caused on next click of any photo
    setClickedPhoto(null);
  };

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
  <div className="App">
    {/* <PhotoListItem/> */}
    {/* <PhotoFavButton/> */}
    {/* <TopicListItem/> */}
    {/* <TopicList/> */}
    {/* <TopNavigation/> */}
    {/* <PhotoList/> */}
    <HomeRoute 
        topics={topics} 
        photos={photos} 
        onPhotoClick={handlePhotoClick} 
        favPhotos={favPhotos} 
        addFavPhoto={addFavPhoto} 
        removeFavPhoto={removeFavPhoto} 
      />
    {/*Conditional checks if showModal true, if true render modal*/ }
    {showModal && 
    <PhotoDetailsModal 
        clickedPhoto={clickedPhoto} 
        onClose={closeModal} 
        photos={photos}
        favPhotos={favPhotos} 
        addFavPhoto={addFavPhoto} 
        removeFavPhoto={removeFavPhoto} 
        // onPhotoClick={handlePhotoClick} 
    />
}

  </div>
)}

export default App