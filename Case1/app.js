import getUserData from "./getUserData.js";

// Call the getUserData
// Resolve Promise and log the returned data
// Catch any errors that may occur and log them
getUserData(1)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
