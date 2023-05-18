import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const TopicListComponentsArr = props.topics.map((topic) => {
    return (
      <TopicListItem
        link={topic.link}
        label={topic.label}
        key={topic.id}
        className="topic-list--item"
      />
    );
  });
  console.log(TopicListComponentsArr);
  return <div className="top-nav-bar--topic-list" >{TopicListComponentsArr}</div>;
};

TopicList.defaultProps = {
  topics: [
    {
      id: 1,
      label: "Nature",
      link: "link placeholder",
    },
    {
      id: 2,
      label: "Food",
      link: "link placeholder",
    },
    {
      id: 3,
      label: "People",
      link: "link placeholder",
    },
  ],
};
export default TopicList;
