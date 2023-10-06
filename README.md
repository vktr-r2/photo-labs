# Photolabs

The PhotoLabs project was made during the React portion of the Lighthouse Labs bootcamp course.  PhotoLabs is designed to be a single-paged app that allows users to view photos, favourite them, and filter them based on topics/categories.  

The project was primarily focused on introducing us to front-end dynamic websit design using React components, states, and hooks.  Secondary focus was on further honing back-end skills with Express, HTTP, and API fetch requests and responses.

## Screenshots

![PhotoLabs - HomeRoute View](https://github.com/vktr-r2/photo-lab/blob/main/docs/PhotoLabs%20-%20%20HomeRoute%20View.png?raw=true)

![PhotoLabs - Modal View](https://github.com/vktr-r2/photo-lab/blob/main/docs/PhotoLabs%20-%20Modal%20View.png?raw=true)

![PhotoLabs - Topics View](https://github.com/vktr-r2/photo-lab/blob/main/docs/PhotoLabs%20-%20Topics%20View.png?raw=true)



## Getting Started and Setup
Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

#### [Frontend] Running Webpack Development Server
cd frontend
npm start

#### [Backend] Running Backend Server
cd backend
npm start

#### [Browser] Launching The App
visit http://localhost:3000/ in your browser



## Using The App
Once the app has launched you can do the following:
- Click a heart icon on any photo to favourite it
- Click on a photo to view it in a zoomed in modal where similar photos will be displayed
- From main page, click on a topic in right hand corner to filter photos by that topic
- Click on the PhotoLabs logo in the top left corner to remove filters and view entire photos list



## Dependencies

#### [Frontend]
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"

#### [Backend]
    "body-parser": "^1.18.3",
    "cors": "^2.8.5",
    "dotenv": "^7.0.0",
    "express": "^4.16.4",
    "helmet": "^3.18.0",
    "pg": "^8.5.0",
    "socket.io": "^2.2.0",
    "ws": "^7.0.0"



## TO DO AFTER BOOTCAMP:

#### performance and scalability
- () Photo filter restructure
    - () Move initial API axios call to backend
    - () Call photo data to frontend using axois
    - () Update PhotoList filter flow
- () Upgrade state management to Redux or Context
- () Build testing
- () Double check app isn't rendering more than it needs to
- () Stop browser refresh from resetting state
- () Best practises

#### feature/advanced-filtering
- (DONE) Reset both category and favourite state with PhotoLabs navbar button
- (DONE) Ability to filter for favs + category at one time
- () Handle if no favs are available

#### navbar-usability
- () Make PhotoLabs navbar button look more clickable and indicate state
- () Make category and fav buttons look more clickable and indicate state
- () Make navbar styling more dynamic based on width
