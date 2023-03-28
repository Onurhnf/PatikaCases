import axios from "axios";

// An async function that takes a single parameter userId
async function getUserData(userId) {
  function createPromiseWithText(text, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(text);
        resolve();
      }, delay);
    });
  }

  function printTexts() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${99}`)
      .then((result1) => {
        console.log(result1.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`https://jsonplaceholder.typicode.com/users/${2}`)
      .then((result2) => {
        console.log(result2.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  printTexts();
}

export default getUserData;
