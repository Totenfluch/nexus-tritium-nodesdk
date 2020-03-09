module.exports = async (connectionDetails, axios, method, params) => {
  let postRequest;
  try {
    const connection = `http://${connectionDetails.host}:${connectionDetails.port}`;
    postRequest = await axios({
      method: 'post',
      url: `${connection}/${method}`,
      headers: {
        Authorization: `Basic ${Buffer.from(`${connectionDetails.apiUsername}:${connectionDetails.apiPassword}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      data: params,
    });
  } catch (e) {
    if (e.response.data) {
      throw Error(JSON.stringify(e.response.data));
    }
    if (e.response.statusText) {
      throw Error(e.response.statusText);
    }
  }
  return postRequest.data;
};
