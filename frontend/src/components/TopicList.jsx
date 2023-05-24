import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const TopicListComponentsArr = props.topics.map((topic) => {
    return (
      <TopicListItem
        link={topic.link}
        label={topic.title}
        key={topic.id}
        className="topic-list--item"
        onClick={() => props.updateTopic(topic.id)}
      />
    );
  });
  return (
    <div className="top-nav-bar--topic-list">{TopicListComponentsArr}</div>
  );
};

export default TopicList;
