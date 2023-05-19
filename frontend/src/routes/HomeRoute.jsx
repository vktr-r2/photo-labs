import React, { useState, useEffect } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) => {
  
  //Set state of favCount default to 0
  const [favCount, setFavCount] = useState(0);

  const incrementFavCount = () => {
    setFavCount(favCount + 1);
};

useEffect(() => {
  console.log("FavCount triggered. Current count: ", favCount);
}, [favCount]);

  const {topics, photos} = props;

  return (
  <div className="home-route">
    <TopNavigation topics={topics}/>
    <PhotoList photos={photos} incrementFavCount={incrementFavCount} />
  </div>
  );
}

export default HomeRoute;