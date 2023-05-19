import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = () => 
  <div className="home-route">
    <TopNavigation/>
    <PhotoList/>
  </div>

export default HomeRoute;