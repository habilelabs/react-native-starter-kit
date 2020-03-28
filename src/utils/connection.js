import request from './request';
import globalConfig from './global';
import configApi from '../config/apiConfig';
import qs from 'qs';

/**
 * Get connection.
 * @returns {Promise<T | never>}
 */
async function getConnection() {
    let accessToken = globalConfig.getAuthInfo().accessToken;
    //TODO: we need to check if access token is still valid.
    if (accessToken) {
        return request;
    } else {
        return request.post(configApi.AUTH_ENDPOINT, qs.stringify({
            grant_type: 'client_credentials',
            client_id: configApi.CLIENT_KEY,
            client_secret: configApi.CLIENT_SECRET,
            scope: configApi.SCOPE
        })).then((response) => {
            globalConfig.setAuthInfo(response);
            return request;
        })
        .catch((error) => {
            //on access failed.
            console.log('error------->>>', error);
        })
    }
}

export  {
    getConnection
};