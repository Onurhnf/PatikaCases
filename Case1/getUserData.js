import axios from "axios";

async function getUserData(userId) {
  const [userData, postsData] = await Promise.all([
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`),
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
  ]);

  return {
    ...userData.data,
    posts: postsData.data,
  };
}

export default getUserData;
