import React from "react";

import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";
import TopicList from "./TopicList";

const TopNavigation = (props) => {
  const { favPhotos, toggleShowFavOnly, updateTopic, resetTopic } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo" onClick={resetTopic}>
        PhotoLabs
      </span>

      <div className="top-nav-bar--links">
        <TopicList topics={props.topics} updateTopic={updateTopic} />
        <FavBadge favPhotos={favPhotos} onClick={toggleShowFavOnly}/>
      </div>
    </div>
  );
};

export default TopNavigation;
