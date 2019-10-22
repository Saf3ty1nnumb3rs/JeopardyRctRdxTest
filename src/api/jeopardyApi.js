import axios from 'axios';
import getBaseUrl from './baseUrl';
import {
  configureHttpHeaders,
  onSuccess,
  onError
} from './apiHelper';

const baseUrl = getBaseUrl();

export function getCategoriesByCount(count) {
  configureHttpHeaders(axios);

  return get(`categories?count=${count}`);
}

const get = async (url) => {
  try {
    const res = await axios.get(`${baseUrl}${url}`);
    return onSuccess(res);
  } catch (err) {
    return onError(err);
  }
};

export default {
  getCategoriesByCount
}
