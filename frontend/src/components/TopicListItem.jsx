import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { id, label, link, onClick } = props;

  const handleClick = (event) => {
    event.preventDefault(); // prevent the link from navigating away
    onClick(); // call the click handler passed in props
  };

  return (
    <div className="topic-list--item">
      <a
        href={link}
        key={id}
        className="topic-list--item-link"
        onClick={handleClick}
      >
        <span>{label}</span>
      </a>
    </div>
  );
};

export default TopicListItem;
