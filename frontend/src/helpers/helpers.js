// Function finds all similar photos based on photo ID of the clicked photo
export const findSimilarPhotos = (id, photoDataArr) => {
  const photoObj = photoDataArr.find(photo => photo.id === id);
  return photoObj ? [...photoObj.similar_photos] : [];
};