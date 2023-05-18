import React from 'react';

import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {
  const {id, label, link} = props;

  return (
  <div className="topic-list--item">
    <a href={link} key={id} className="topic-list--item-link"> 
      <span>{label}</span> 
    </a>
  </div>
  )
}

export default TopicListItem

// TopicListItem.defaultProps = {
//   id: 1,
//   label: 'Nature',
//   link: 'link placeholder' 
// }