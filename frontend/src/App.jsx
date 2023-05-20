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

  //State controls whether modal should be active or not
  const [showModal, setShowModal] = useState(false);
  //State controls the photo data that will be passed to the modal
  const [clickedPhoto, setClickedPhoto] = useState(null);

  //Function to be drilled down to PhotoListItem component, captures photoProps of photo that is clicked and sets showModal to TRUE
  const handlePhotoClick = (photoProps) => {
    setClickedPhoto(photoProps);
    setShowModal(true);
    // console.log(photoProps) //TEST to see if handlePhotoClick is being passed photoProps arg successfully - WORKS
  };

  const closeModal = () => {
    setShowModal(false);
    setClickedPhoto(null);
  };



  return (
  <div className="App">
    {/* <PhotoListItem/> */}
    {/* <PhotoFavButton/> */}
    {/* <TopicListItem/> */}
    {/* <TopicList/> */}
    {/* <TopNavigation/> */}
    {/* <PhotoList/> */}
    <HomeRoute topics={topics} photos={photos} onPhotoClick={handlePhotoClick}/>
    {/*Conditional checks if showModal true, if true render modal*/ }
    {showModal && <PhotoDetailsModal photo={clickedPhoto} onClose={closeModal}/>}

  </div>
)}

export default App