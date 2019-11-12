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
    if (!e.response) {
      throw Error(e);
    }
    throw Error(e);
  }
  return postRequest.data.result;
};
