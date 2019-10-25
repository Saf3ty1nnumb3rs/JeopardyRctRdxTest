import { useEffect } from 'react';

export const useApi = (api, params, response, setResponse) => {
  useEffect(() => {
    async function apiCall() {
      const res = await api(params);
      setResponse(res);
    }
    apiCall();
  }, [api, params, setResponse]);
  return response;
}