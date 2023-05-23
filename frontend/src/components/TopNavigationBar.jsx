import React from 'react';

import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = (props) => {

  const {favPhotos, updateTopic} = props;

  // console.log(props.topics); //confirmed topics array received 

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>

      <div className="top-nav-bar--links">
      <TopicList topics={props.topics} updateTopic={updateTopic} />
      <FavBadge favPhotos={favPhotos}/>
      </div>
    </div>
  )
}

export default TopNavigation;