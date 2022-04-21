import renderPlayer from './data.js';

// const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/xjollLOeoeW5XMm3S911/scores';
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/xjollLOeoeW5XMm3S9/scores';


export const postResponse = async (newPlayer) => {
  try {
    const post = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ user: newPlayer.user, score: newPlayer.score }),
    });
    const response = await post.json();
    return response;
  } catch (error) {
    // throw new Error(error.message);
    throw new Error('can not create gam');
  }
};

export const getResponse = async () => {
  const get = await fetch(url);
  try {
    const response = await get.json();
    const sortedGameData = response.result.sort((a, b) => (b.score > a.score ? 1 : -1));
    renderPlayer(sortedGameData);
  } catch (err) {
    console.log(err.message);
  }
};

// if(response.status !== 200){
//   throw new Error('can not fetch the data');
// }