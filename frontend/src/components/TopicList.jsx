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
        id={topic.id}
        currentTopic={currentTopic}
        onClick={
          // If same topic is clicked, reset topic to undefined : if new topic is clicked, set topic to topic.id
          currentTopic === topic.id? () => updateTopic(undefined) : () => updateTopic(topic.id)
        }
      />
    );
  });
  return (
    <div className="top-nav-bar--topic-list">{TopicListComponentsArr}</div>
  );
};

export default TopicList;
