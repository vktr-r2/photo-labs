import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const {topics, updateTopic, currentTopic} = props;
  const TopicListComponentsArr = topics.map((topic) => {
    return (
      <TopicListItem
        link={topic.link}
        label={topic.title}
        key={topic.id}
        currentTopic={currentTopic}
        onClick={() => updateTopic(topic.id)}
      />
    );
  });
  return (
    <div className="top-nav-bar--topic-list">{TopicListComponentsArr}</div>
  );
};

export default TopicList;
