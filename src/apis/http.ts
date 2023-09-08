import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

// const baseURL = "http://localhost:4000/";
const baseURL = "https://deploy-json-git-main-datoybi.vercel.app/";

const axios = Axios.create({
  baseURL,
});

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error: AxiosError) => {
    if (error.response && error.response.status > 200) {
      throw error;
    }
  }
);

export const http = {
  get: function get<Response = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Response>> {
    return axios.get<Response>(url, config);
  },
};
