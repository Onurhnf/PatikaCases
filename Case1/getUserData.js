import axios from "axios";

// An async function that takes a single parameter userId
async function getUserData(userId) {
  // Use Promise.all to make concurrent requests to the JSONPlaceholder API for user and post data
  const [userData, postsData] = await Promise.all([
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`),
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
  ]);

  // Spread the returned user and post data into a single object and return it
  return {
    ...userData.data,
    posts: postsData.data,
  };
}

export default getUserData;
