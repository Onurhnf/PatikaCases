import getUserData from "./getUserData.js";

getUserData(1)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
