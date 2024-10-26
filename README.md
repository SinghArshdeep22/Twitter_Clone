# Twitter Clone

A web application mimicking the functionalities of Twitter, built using modern web technologies. 
The app allows users to interact in real time, posting and receiving tweets instantly.

## Technologies Used

- **HTML** - structuring the web pages.
- **CSS** - styling and layout.
- **JavaScript** - dynamic interactivity and client-side logic.
- **Socket.IO** - real-time communication between clients and server.
- **Express** - building the web server.
- **Node.js** - running the server-side application.

## Features

- Real-time updates of tweets using Socket.IO.
- User-friendly interface for creating and viewing tweets.
- Responsive design for optimal viewing on various devices.

## Installation Process

1. Clone the repository using the command provided:
   ```bash
   git clone https://github.com/SinghArshdeep22/Twitter_Clone.git
2. Navigate into the project directory:
   ```bash
   cd Twitter_Clone
3. Install the required dependencies -- Express + Socket.io:
   ```bash
   npm install express socket.io
4. Start the server:
   ```bash
   node server.js
5. Open your browser and navigate to `http://localhost:3000` (or the port your server runs on).


## Development Planning
- Configuring the Development Environment
- Server Configuration with Socket.io
- Basic Interface (HTML + CSS)
- Functionality of sending and receiving tweets in real time -- Client-side logic
- Interface enhancement and interactivity
- Final testing and refinement
- Publication on Github

## Web Application Layout

- **User Profile** (left sidebar)
    - Profile picture
    - Name
    - Username
    - Statistics (e.g. followers and following)
    
- **Tweets** (central section)
    - Creation of new tweets
    - List of recent tweets
    
- **Feed** (right sidebar)
    - Current trends
    - Suggestions

## Future Enhancements

- Implement user authentication.
- Add direct messaging functionality.
- Create an API for external integrations.

## Configuring the Development Environment
   ```java
   twitter_clone/
├── node_modules/
├── public/
│   ├── index.html
│   ├── styles.css
│   ├── index.js
│   ├── fonts/
│   │   └── Chirp-Regular.ttf
│   └── imgs/
│       ├── bird_logo.svg
│       ├── favicon.svg
│       └── user_logo.svg
├── .gitignore
├── package-lock.json
├── package.json
└── server.js
