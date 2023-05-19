import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  //Receive photos data, favPhotos state, and add/removeFavPhoto update functions as props from HomeRoute parent
  const { photos, favPhotos, addFavPhoto, removeFavPhoto } = props;

  //Declare new PhotoListComponentsArr, check if "photos" is array, if true then use .map to create each PhotoListItem component
  const PhotoListComponentsArr = Array.isArray(photos) && photos.map((photo) => {
    return (
      <PhotoListItem
        key={photo.id}
        username={photo.user.username}
        imageSource={photo.urls.regular}
        description={photo.description}
        isFav={favPhotos[photo.id]} // Boolean indicating whether photo is favourited based on whether photo.id exists in favPhotos obj
        onFavClick={() => addFavPhoto(photo.id)} // Pass function with photo.id as arg to addFavPhoto
        onUnFavClick={() => removeFavPhoto(photo.id)} // Pass function with photo.id as arg to removeFavPhoto
      />
    )
  });

  return <ul className="photo-list">{PhotoListComponentsArr}</ul>;
};

export default PhotoList;


// {
//   "id": "Dwu85P9SOIk1",
//   "created_at": "2016-05-03T11:00:28-04:00",
//   "updated_at": "2016-07-10T11:00:01-05:00",
//   "color": "#6E633A",
//   "downloads": 1345,
//   "likes": 24,
//   "description": "A man drinking a coffee.",
//   "location": {
//     "city": "Montreal",
//     "country": "Canada",
//     "position": {
//       "latitude": 45.473298,
//       "longitude": -73.638488
//     }
//   },
//   "urls": {
//     "raw": "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a",
//     "full": "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?q=80&fm=jpg",
//     "regular": "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?q=80&fm=jpg&w=1080&fit=crop",
//     "small": "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMzM2Mzg4Ng&ixlib=rb-1.2.1&q=80&w=400",
//     "thumb": "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?q=80&fm=jpg&w=200&fit=crop"
//   },
//   "user": {
//     "id": "QPxL2MGqfrw",
//     "updated_at": "2016-07-10T11:00:01-05:00",
//     "username": "exampleuser",
//     "name": "Joe Example",
//     "portfolio_url": "https://example.com/",
//     "bio": "Just an everyday Joe"
//   }
//   }

// PhotoList.defaultProps = {
//   photos: [
//     {
//       username: "Jacob",
//       imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//       id: 1,
//       hideUserName: false,
//     },
//     {
//       username: "Jacob",
//       imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//       id: 2,
//       hideUserName: false,
//     },
//     {
//       username: "Jacob",
//       imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//       id: 3,
//       hideUserName: false,
//     },
//     {
//       username: "Jacob",
//       imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//       id: 4,
//       hideUserName: false,
//     },
//     {
//       username: "Jacob",
//       imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//       id: 5,
//       hideUserName: false,
//     },
//     {
//       username: "Jacob",
//       imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//       id: 6,
//       hideUserName: false,
//     },
//   ],
// };

