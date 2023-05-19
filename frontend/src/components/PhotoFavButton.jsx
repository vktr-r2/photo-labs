//useState creates a local state in the component
//useCallback is a hook used to memoize functions to prevent unnecessary re-renders.  Uses JS closures to achieve this
import React, { useCallback, useState } from 'react';

// Importing the FavIcon component (heart icon)
import { FavIcon } from './FavIcon';

import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  // This is a state hook, which creates a state variable 'filled' and its associated setter 'setFilled'. 
  // The initial value of 'filled' is false, indicating the heart is not filled.
  const [filled, setFilled] = useState(false);

  // useCallback hook is used here to create a "memoized??"" version of the 'handleClick' function. 
  // Function will only be recreated if any of the values in the dependency array change??
  // So this function will only be created once during the initial render, which improves performance
  const handleClick = useCallback(() => {
    // The handleClick function is toggling the value of 'filled' to the opposite of its current state,
    setFilled((prevFilled) => !prevFilled);
  }, []);

  // fillColor is defined based on the value of 'filled'. 
  // If 'filled' true , color is '#C80000' (red). 
  // If 'filled' false, the color is '#EEEEEE' (gray).
  const fill = filled ? '#C80000' : '#EEEEEE';

//Parent <div> has an 'onClick' handler, which will invoke the 'handleClick' function when it's clicked.
  // child <div> contains the 'FavIcon' component.
  // The 'fill' prop of 'FavIcon' is set to the 'fill', which changes based on the 'filled' state.
  return (
    <div className="photo-list--fav-icon" onClick={handleClick}>
      <div className="photo-list--fav-icon-svg">
        <FavIcon fill={fill} />
      </div>
    </div>
  );
}


export default PhotoFavButton;
