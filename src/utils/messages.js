const generateMessage = (username, message) => {
  return {
    username,
    message,
    createdAt: new Date().getTime()
  }
};

const generateLocationMessage = (username, locationUrl) => {
  return {
    username,
    locationUrl,
    createdAt: new Date().getTime()
  }
}

module.exports = {
  generateMessage,
  generateLocationMessage
};