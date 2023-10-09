import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { id, label, link, onClick, currentTopic } = props;

  const handleClick = (event) => {
    event.preventDefault(); // prevent the link from navigating away
    onClick(); // call the click handler passed in props
  };

  console.log(`key=${link} | currentTopic state=${currentTopic}`)
  return (
    <div className="topic-list--item">
      <a
        href={link}
        key={id}
        className={id === currentTopic ? "topic-list--item-link--active" : "topic-list--item-link" }
        onClick={handleClick}
      >
        <span>{label}</span>
      </a>
    </div>
  );
};

export default TopicListItem;
