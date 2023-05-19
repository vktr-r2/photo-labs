import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import PhotoFavButton from './components/PhotoFavButton';
import TopicListItem from './components/TopicListItem';
import TopicList from './components/TopicList';
import TopNavigation from './components/TopNavigationBar';
import HomeRoute from './routes/HomeRoute';

import topics from './mocks/topics.json';
import photos from './mocks/photos.json';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
  <div className="App">
    {/* <PhotoListItem/> */}
    {/* <PhotoFavButton/> */}
    {/* <TopicListItem/> */}
    {/* <TopicList/> */}
    {/* <TopNavigation/> */}
    {/* <PhotoList/> */}
    <HomeRoute topics={topics} photos={photos}/>

  </div>
)}

export default App