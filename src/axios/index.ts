import axios from "axios";

declare global {
  interface Window {
    GLOBAL_VARIABLES: {
      BASE_URL: string;
      HEADERS: any;
    };
  }
}

const createBaseApi = () => {
  return axios.create({
    baseURL: window.GLOBAL_VARIABLES.BASE_URL,
    headers: window.GLOBAL_VARIABLES.HEADERS,
  });
};

export { createBaseApi, axios };
