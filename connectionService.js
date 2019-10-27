module.exports = async (connection, axios, method, params) => {
  let postRequest;
  try {
    console.log(`${connection}/${method}`);
    postRequest = await axios.post(`${connection}/${method}`, params);
  } catch (e) {
    throw Error(e);
  }
  return postRequest.data;
};
