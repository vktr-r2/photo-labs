export const ACTIONS = {
  SHOW_MODAL: "SHOW_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  SET_CLICKED_PHOTO: "SET_CLICKED_PHOTO",
  ADD_FAV_PHOTO: "ADD_FAV_PHOTO",
  REMOVE_FAV_PHOTO: "REMOVE_FAV_PHOTO",
  SET_TOPICS: "SET_TOPICS",
  SET_PHOTOS: "SET_PHOTOS",
  SET_TOPIC: "SET_TOPIC",
  TOGGLE_SHOW_FAV_ONLY: "TOGGLE_SHOW_FAV_ONLY",
};

//Reducer takes current state object as arg and action object as well. Action parameter describes the change we need to apply to the state
export const reducer = (state, action) => {
  //Switch/case statement checks value of action.type property, and will return what changes need to be applied to the state object
  switch (action.type) {
    //ACTIONS.SHOW_MODAL: showModal property is set to TRUE to trigger modal render
    case ACTIONS.SHOW_MODAL:
      return { ...state, showModal: true };

    //ACTIONS.CLOSE_MODAL: set showModal: false and clickedPhoto: NULL to empty clickedPhoto state and close modal window
    case ACTIONS.CLOSE_MODAL:
      return { ...state, showModal: false, clickedPhoto: null };

    //ACTIONS.SET_CLICKED_PHOTO: set clickedPhoto property to equal value of action.payload (the id of the clicked photo)
    case ACTIONS.SET_CLICKED_PHOTO:
      return { ...state, clickedPhoto: action.payload };

    //ACTIONS.ADD_FAV_PHOTO: add [photo.id]: true to the favPhotos object to store the photo as a favourite
    case ACTIONS.ADD_FAV_PHOTO:
      return {
        ...state,
        favPhotos: { ...state.favPhotos, [action.payload]: true },
      };

    case ACTIONS.REMOVE_FAV_PHOTO:
      //Make a copy of favPhotos object
      let updatedFavPhotos = { ...state.favPhotos };
      //In copy of object, delete the key/value pair where the key matches the photoID for the unliked photo
      delete updatedFavPhotos[action.payload];
      //Return a copy of the current state object, and set favPhotos object within it to equal new updatedFavPhotos
      return { ...state, favPhotos: updatedFavPhotos };

    case ACTIONS.SET_TOPICS:
      //ACTIONS.SET_TOPICS: triggers API call to bring in topics and store in state
      return { ...state, topicsData: action.payload };

    case ACTIONS.SET_PHOTOS:
      //ACTIONS.SET_PHOTOS: triggers API call to bring in photos and store in state
      return { ...state, photosData: action.payload };

    case ACTIONS.SET_TOPIC:
      //ACTIONS.SET_TOPIC: triggers API call to bring in photos filtered by a specific topic by capturing topic id on click
      return { ...state, currentTopic: action.payload };

    case ACTIONS.TOGGLE_SHOW_FAV_ONLY:
      // ACTIONS.TOGGLE_SHOW_FAV_ONLY: toggles PhotoList to only show favourited photos
      return { ...state, showFavOnly: action.payload };

    //Catches all action.types that have not had cases defined for them above
    default:
      throw new Error(
        `Unable to reduce with unsupported action type: ${action.type}`
      );
  }
};
