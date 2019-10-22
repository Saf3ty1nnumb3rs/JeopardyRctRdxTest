export function configureHttpHeaders(axios) {
  axios.defaults.headers.common['Accept'] = 'text/csv,application/pdf,application/json';
}

export function onSuccess(response) {
  let result;
  const data = response.data ? 'data' : 'content';
  if (response.status !== 204) {
    result = response[data] ? (response[data]) : (response = { [data]: 'Success' });
  } else {
    result = 'Success';
  }
  return result;
}

export function onError(error) {
  if (error &&
    (error.response || error.message)) {
    throw error;
  } else {
    console.log(error);
  }
}