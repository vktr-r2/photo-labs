import React from "react";

import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";
import TopicList from "./TopicList";

const TopNavigation = (props) => {
  const {
    favPhotos,
    toggleShowFavOnly,
    topics,
    showFavOnly,
    updateTopic,
    resetFilters,
    currentTopic,
  } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo" onClick={resetFilters}>
        PhotoLabs
      </span>

      <div className="top-nav-bar--links">
        <TopicList
          topics={topics}
          updateTopic={updateTopic}
          currentTopic={currentTopic}
        />
        <div
          className={
            showFavOnly ? "top-nav-bar-fav--active" : "top-nav-bar-fav"
          }
        >
          <FavBadge favPhotos={favPhotos} onClick={toggleShowFavOnly} />
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
