//ACTIONS is object full of strings that help us pass instruction to dispatch function later on
//Important to set these as strings in an object >> in case of typo JS will advise we're using an undefined constant, where as spelling out the string manually each time could make it hard to find a typo
export const ACTIONS = {
  SHOW_MODAL: "SHOW_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  SET_CLICKED_PHOTO: "SET_CLICKED_PHOTO",
  ADD_FAV_PHOTO: "ADD_FAV_PHOTO",
  REMOVE_FAV_PHOTO: "REMOVE_FAV_PHOTO",
  SET_TOPICS: "SET_TOPICS",
  SET_PHOTOS: "SET_PHOTOS",
  SET_TOPIC: "SET_TOPIC",
};

//Reducer takes the current state object as an arguement (object stores all different states for our app) and an action object as well, which is expected to have a "type" property.  "action" parameter describes the change we need to apply to the state
export const reducer = (state, action) => {
  //Switch/case statement acts as a giant IF/ELSE statement.  It checks the value of action.type property, and will return what changes need to be applied to the state object based on the value given.
  switch (action.type) {
    //In the case of ACTIONS.SHOW_MODAL: return a new state object that is a copy of the old state object, but showModal property is set to TRUE
    case ACTIONS.SHOW_MODAL:
      return { ...state, showModal: true };

    //Case of ACTIONS.CLOSE_MODAL: return copy of state object, set showModal: false and clickedPhoto: NULL to empty stored photo data (so modal can be reopened on another photo)
    case ACTIONS.CLOSE_MODAL:
      return { ...state, showModal: false, clickedPhoto: null };

    //Case of ACTIONS.SET_CLICKED_PHOTO: return copy of state object, and set clickedPhoto property to equal value of action.payload.
    //actions (the arguement passed to reducer) are often defined as plain objects with a TYPE property and a PAYLOAD property. The type describes the kind of state change, and the payload field contains any data needed for the update.
    //In the case of ACTIONS.SET_CLICKED_PHOTO, action.payload is expected to contain the data of the clicked photo. When this action is dispatched, the clickedPhoto state will be updated with the data provided in action.payload
    case ACTIONS.SET_CLICKED_PHOTO:
      return { ...state, clickedPhoto: action.payload };

    //Case of ACTIONS.ADD_FAV_PHOTO: return copy of state.  Since favPhotos is an object within state, return copy of favPhotos object, and add [action.payload] (action.payload is us using the photo ID as the key): true (true meaning the photo has been favourited)
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
      // In the case of ACTIONS.SET_TOPICS, return a new state object that is a copy of the old state object, but topicsData property is set to action.payload
      return { ...state, topicsData: action.payload };

    case ACTIONS.SET_PHOTOS:
      // In the case of ACTIONS.SET_PHOTOS, return a new state object that is a copy of the old state object, but photosData property is set to action.payload
      return { ...state, photosData: action.payload };

    case ACTIONS.SET_TOPIC:
      //action.payload is the topicId of the clicked on topic in TopicListItem
      return { ...state, topic: action.payload };

    //Catches all action.types that have not had cases defined for them above
    default:
      throw new Error(
        `Unable to reduce with unsupported action type: ${action.type}`
      );
  }
};
