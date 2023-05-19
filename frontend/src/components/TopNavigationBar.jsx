import React from 'react';

import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>

      <div className="top-nav-bar--links">
      <TopicList/>
      <FavBadge/>
      </div>
    </div>
  )
}

export default TopNavigation;