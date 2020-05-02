## Chat-App
- Created as part of [The Complete Node.js course on Udemy](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/)

## Description
- Allow users to create and join chat rooms to chat with each other and share their location.

## Specifications
### UI Specs
1. On index.html:
  - Users should be able to add a display name and chat room
  - On submit, should move to chat.html and submit name and room
2. On chat.html
  - Left-sidebar should show name of chatroom at top with list of users
  - Main div is a Chat window which should show which user sent a message, at which time, and what their message was
  - Bottom section should have an input where a new message can be composed, with a "send" and "share location" button
  - When "Send" clicked, Chat window should update with user's message
  - When "Share Location" clicked, should share a link in the Chat window that goes to google maps with the users long/lat input
  - As messages go beyond height of Chat Window, window should auto scroll to bottom position
  - If scrolled above fold and new message is input, the window won't auto-scroll to bottom position

### Chat.js Specs
  - When chat.html loads, "join" should be emitted with username and room supplied as props
  - Autoscroll will handle scrolling to bottom of window only if user has scrolled to bottom of window
  - socket.on "displayMessage" will update view with new message
  - socket.on "displayLocation" will update view with location link
  - socket.on "roomData" will update view with room name and users list
  - When $messageForm is submitted "sendMessage" will be emitted so other users can see message
  - When $sendLocation is clicked lat and long will be captured from browser and be emitted to "shareLocation"

### Backend index.js specs
  - on "join" user will be added, message will be displayed to other users that they joined, and roomData will be udpated for the room to show list of users
  - on "sendMessage" message will be blocked if a profane word exists, otherwise will emit "displayMessage"
  - on "shareLocation" "locationMessage" will be emitted with location URL sent to users as a message
  - on "disconnect" both "displayMessage" and "roomData" will be emitted, to show message that user left room, and update list of users in room

### Utils Specs
#### messages.js
  - generateMessage() will take username and message as arguments and return an object with username, message, and createdAt, which stores date
  - generateLocationMessage() will take username and locationUrl as arguments and return an object with username, locationURL and createdAt which stores date
  - Both of these functions will be used to emit to the front end and update the view with new messages (see shareLocation, sendMessage, join, displayMessage and disconnect)

#### users.js
  - addUser() will take an object containing name, username and room as arguments, and do the following:
    - trim and lowercase username and data
    - return object containing an error if username/room don't exist
    - return object containing an error if a username is already taken in a room
    - store user as an object with id, username and room (trimmed) in global users array
    - return user object
  - removeUser() will take user id as an argument and remove them from users array
  - getUser() will take user id as an argument and return the user if their id exists in users array
  - getUsersInRoom() will take room as an argument and return an array of users who is in the room

## Setup/Install Requirements

First install dependencies

```bash
npm install
```

Then start up the dev server
```bash
npm run dev
```

## Known Bugs
- currently none

## Support and Contact Details
- For support or questions contact Darren Bridenbeck, darren.bridenbeck@gmail.com

## Technologies Used
- [bad-words](https://www.npmjs.com/package/bad-words) to filter user messages if they contain curse words
- server built using [express](https://www.npmjs.com/package/express)
- templating done thanks to [handlebars](https://www.npmjs.com/package/handlebars)
- [Socket.io](https://www.npmjs.com/package/socket.io) used for real-time bidirectional updates between server and client