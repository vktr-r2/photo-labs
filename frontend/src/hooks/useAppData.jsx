import { useReducer, useEffect } from "react";
import { reducer, ACTIONS } from "../reducer/reducer";

export const useApplicationData = () => {
  //initialState object stores the default state for all states
  const initialState = {
    showModal: false,
    clickedPhoto: null,
    favPhotos: {},
    topicsData: [],
    photosData: [],
    topic: undefined,
    showFavOnly: false,
  };

  //Destructuring state, dispatch values from the array that useReducer returns
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect makes two separate fetch calls and updates each time state.topic changes
  useEffect(() => {
    //Set URL to lead to main photo content
    let url = "/api/photos";

    //If state topic is not undefined, then set URL to lead to topic photo content
    if (state.topic !== undefined) {
      url = `http://localhost:8001/api/topics/photos/${state.topic}`;
    }

    fetch("/api/topics")
      // parse JSON response received
      .then((response) => response.json())
      // data = the parsed JSON response
      .then((data) => {
        // Use dispatch to update the state properly
        dispatch({ type: ACTIONS.SET_TOPICS, payload: data });
      })
      // Catch any errors and log them
      .catch((error) => {
        console.error("Error fetching topics:", error);
      });

    //fetch url variable (depends on whether topic is set or not)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //dispatch the photo data that is fetched
        dispatch({ type: ACTIONS.SET_PHOTOS, payload: data });
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
    //if state.topic dependancy changes, call useEffect again
  }, [state.topic]);

  //handlePhotoClick accepts photoProps as argument
  const handlePhotoClick = (photoProps) => {
    // dispatch call triggers an action in the reducer function
    // SET_CLICKED_PHOTO sets value of clickedPhoto state in initialState obj to equal photoProps from clicked photo
    // photoProps payload captured by onClick listener set on the <img> element in PhotoListItem component
    dispatch({ type: ACTIONS.SET_CLICKED_PHOTO, payload: photoProps });
    //SHOW_MODAL sets showModal value to TRUE in PhotoListItem
    dispatch({ type: ACTIONS.SHOW_MODAL });
  };

  const closeModal = () => {
    //CLOSE_MODAL sets showModal to FALSE< and clickedPhoto to NULL
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  //accepts photoId from props passed up from photo where the favourite icon is clicked
  const addFavPhoto = (photoId) => {
    //ADD_FAV_PHOTO adds a property to the favPhotos obj formatted as "[photoId]: true"
    dispatch({ type: ACTIONS.ADD_FAV_PHOTO, payload: photoId });
  };

  //accepts photoId from props passed up from photo where the favourite icon is clicked
  const removeFavPhoto = (photoId) => {
    //REMOVE_FAV_PHOTO deletes property from favPhotos obj where key matches the photoID arguement received
    dispatch({ type: ACTIONS.REMOVE_FAV_PHOTO, payload: photoId });
  };

  //accepts topicId from props passed up from TopicListItem is clicked
  const updateTopic = (topicId) => {
    //SET_TOPIC sets topic state to topicId
    dispatch({ type: ACTIONS.SET_TOPIC, payload: topicId });
  };

  //rese topic state back to undefined to view unfiltered list of photos
  const resetFilters = () => {
    dispatch({ type: ACTIONS.SET_TOPIC, payload: undefined });
    dispatch({ type: ACTIONS.TOGGLE_SHOW_FAV_ONLY, payload: false });
  };

  // toggles whether PhotoList should filter favs or not
  const toggleShowFavOnly = () => {
    dispatch({ type: ACTIONS.TOGGLE_SHOW_FAV_ONLY, payload: !state.showFavOnly });
  };

  //Return current state along with dispatch functions
  return {
    ...state,
    handlePhotoClick,
    closeModal,
    addFavPhoto,
    removeFavPhoto,
    updateTopic,
    resetTopic: resetFilters,
    toggleShowFavOnly,
  };
};
