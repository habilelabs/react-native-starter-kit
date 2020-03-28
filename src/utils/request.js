import axios from 'axios';
const request = axios.create();
import globalConfig from './global';
import configApi from '../config/apiConfig';
const jwtNotRequiredList = ['oauth2'];

request.interceptors.request.use(
    config => {
        config.baseURL = configApi.API_ENDPOINT;
        const url = config.url;
        const checkJwt = jwtNotRequiredList.findIndex(jwt => url.includes(jwt));
        if (checkJwt >= 0) {
            config.headers = {
                'cache-control': 'no-cache',
                'content-type': 'application/x-www-form-urlencoded',
                'vf-country-code': 'GR'
            }
        } else {
            config.headers = {
                'accept-language': 'el',
                'content-type': 'application/json',
                'Authorization': `Bearer ${globalConfig.getAuthInfo().accessToken}`,
            }
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

request.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        console.log('error.request------------>>>>', error.request);
        console.log('error.response------------>>>>', error.response);
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            return Promise.reject(error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            return Promise.reject(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            return Promise.reject(error);
        }
    },
);

// request.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

export default request;
