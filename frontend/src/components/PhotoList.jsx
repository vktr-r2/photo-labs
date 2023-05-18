import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const list = [];
  const length = props.photos.length;

  for (let i = 0; i < length; i++) {
    const photo = props.photos[i];
    list.push(
      <li key={photo.id}>
        <PhotoListItem
          username={photo.username}
          imageSource={photo.imageSource}
          hideUserName={photo.hideUserName}
        />
      </li>
    );
  }

  return <ul className="photo-list">{list}</ul>;
};

PhotoList.defaultProps = {
  photos: [
    {
      username: "Jacob",
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 1,
      hideUserName: false,
    },
    {
      username: "Jacob",
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 2,
      hideUserName: false,
    },
    {
      username: "Jacob",
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 3,
      hideUserName: false,
    },
    {
      username: "Jacob",
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 4,
      hideUserName: false,
    },
    {
      username: "Jacob",
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 5,
      hideUserName: false,
    },
    {
      username: "Jacob",
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 6,
      hideUserName: false,
    },
  ],
};

export default PhotoList;
