/* eslint-disable no-console */
import axios from 'axios';

const fakePost = async (url, dates) => {
  try {
    const res = await axios.post(url, dates);
    console.log('Fake post result: ', res);
  } catch (err) {
    console.warn('Fake post error: ', err);
  }
};

export default fakePost;
