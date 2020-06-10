import axios from 'axios';

export const aboutLoadData = () => axios
  .get('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response)
  .catch((error) => {
    console.log('error', error);
  });
