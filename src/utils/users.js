const users = [];

// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({ id, username, room }) => {
  // Clean data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();
  
  // Validate Data
  if (!username || !room) {
    return {
      error: "Username and room are required."
    }
  }
  
  // Check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });
  
  // Validate username
  if (existingUser) {
    return {
      error: "Username already taken."
    }
  }

  // Store user
  const user = { id, username, room };
  users.push(user);
  return { user }
};

const removeUser = (id) => {
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex !== -1) {
    // remove user and return their user object
    return users.splice(userIndex, 1)[0];
  }
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
  return users.filter((user) => user.room === room);
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom
}