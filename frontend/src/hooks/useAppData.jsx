import React, { useReducer, useEffect } from "react";

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
const reducer = (state, action) => {

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
      return {...state, favPhotos: {...state.favPhotos, [action.payload]: true}}
    
    case ACTIONS.REMOVE_FAV_PHOTO:
      //Make a copy of favPhotos object
      let updatedFavPhotos = {...state.favPhotos};
      //In copy of object, delete the key/value pair where the key matches the photoID for the unliked photo
      delete updatedFavPhotos[action.payload];
      //Return a copy of the current state object, and set favPhotos object within it to equal new updatedFavPhotos
      return {...state, favPhotos: updatedFavPhotos}

      case ACTIONS.SET_TOPICS:
        // In the case of ACTIONS.SET_TOPICS, return a new state object that is a copy of the old state object, but topicsData property is set to action.payload
        return {...state, topicsData: action.payload};
  
      case ACTIONS.SET_PHOTOS:
        // In the case of ACTIONS.SET_PHOTOS, return a new state object that is a copy of the old state object, but photosData property is set to action.payload
        return {...state, photosData: action.payload};

      case ACTIONS.SET_TOPIC:
          //action.payload is the topicId of the clicked on topic in TopicListItem
          return { ...state, topic: action.payload };
    
      //Catches all action.types that have not had cases defined for them above
    default:
      throw new Error (`Unable to reduce with unsupported action type: ${action.type}`);
  }
}

export const useApplicationData = () => {
  
  //initialState object stores the default state for all states
  const initialState = {
    showModal: false,
    clickedPhoto: null,
    favPhotos: {},
    topicsData: [],
    photosData: [],
    topic: undefined
  };

  //Destructuring state, dispatch values from the array that useReducer returns
  const [state, dispatch] = useReducer(reducer,initialState);

// useEffect makes two separate fetch calls after page loads
useEffect(() => {
  fetch('/api/topics')
    // parse JSON response received
    .then(response => response.json())
    // data = the parsed JSON response
    .then(data => {
      // Use dispatch to update the state properly
      dispatch({ type: ACTIONS.SET_TOPICS, payload: data });
    })
    // Catch any errors and log them
    .catch(error => {
      console.error('Error fetching topics:', error);
    });

  fetch('/api/photos')
    .then(response => response.json())
    .then(data => {
      // Use dispatch to update the state properly
      dispatch({ type: ACTIONS.SET_PHOTOS, payload: data });
    })
    // Catch any errors and log them
    .catch(error => {
      console.error('Error fetching photos:', error);
    });
}, []);


  //handlePhotoClick accepts photoProps as argument
  const handlePhotoClick = (photoProps) => {
    // dispatch call triggers an action in the reducer function
    // SET_CLICKED_PHOTO sets value of clickedPhoto state in initialState obj to equal photoProps from clicked photo
    // photoProps payload captured by onClick listener set on the <img> element in PhotoListItem component
    dispatch({ type: ACTIONS.SET_CLICKED_PHOTO, payload: photoProps});
    //SHOW_MODAL sets showModal value to TRUE in PhotoListItem
    dispatch({ type: ACTIONS.SHOW_MODAL});
  };

  const closeModal = () => {
    //CLOSE_MODAL sets showModal to FALSE< and clickedPhoto to NULL
    dispatch({type: ACTIONS.CLOSE_MODAL});
  };

  //accepts photoId from props passed up from photo where the favourite icon is clicked
  const addFavPhoto = (photoId) => {
    //ADD_FAV_PHOTO adds a property to the favPhotos obj formatted as "[photoId]: true"
    dispatch({type: ACTIONS.ADD_FAV_PHOTO, payload: photoId});
  };

  //accepts photoId from props passed up from photo where the favourite icon is clicked
  const removeFavPhoto = (photoId) => {
    //REMOVE_FAV_PHOTO deletes property from favPhotos obj where key matches the photoID arguement received
    dispatch({type: ACTIONS.REMOVE_FAV_PHOTO, payload: photoId});
  };

  //Return current state along with dispatch functions
  return {
    ...state,
    handlePhotoClick,
    closeModal,
    addFavPhoto,
    removeFavPhoto
  };

};

