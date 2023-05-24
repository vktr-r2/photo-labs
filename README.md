# Photolabs

The PhotoLabs project was made during the React portion of the Lighthouse Labs bootcamp course.  PhotoLabs is designed to be a single-paged app that allows users to view photos, favourite them, and filter them based on topics/categories.  

The project was primarily focused on introducing us to front-end dynamic websit design using React components, states, and hooks.  Secondary focus was on further honing back-end skills with Express, HTTP, and API fetch requests and responses.

## Screenshots





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