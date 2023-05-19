import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

export const FavBadge = (props) => {
  
  //favPhotos state drilled down from HomeRoute > object shows which photos (if any) have been liked
  const { favPhotos } = props;

  //isFavPhotoExist function designed to check if favPhotos object is empty or not.  Returns TRUE if ANY photo has been liked
  const isFavPhotoExist = (object) => {
    return Object.keys(object).length > 0;
  }

  return (
    <div className='fav-badge'>
      <FavIcon width={20} height={17} fill="#C80000" displayAlert={!!isFavPhotoExist(favPhotos)}/>
    </div>
  ) 
};

export default FavBadge;