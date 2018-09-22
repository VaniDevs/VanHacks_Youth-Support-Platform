/**
 */

import axios from 'axios'
import moment from 'moment'

export const USER_LOGIN = "http_user_login";
export const USER_GET = "http_user_get";
export const USER_LOGOUT = "http_user_logout";



export const CONFIG_QUERY = 'http_config_query';
export const CONFIG_UPDATE = 'http_config_update';


export const ROOT_URL = window.SERVER_ROOT_URL;

axios.defaults.withCredentials = true;


var generateInvokeNetworkCallback = function (request, callback) {
    request.then((response) => {
        if (response.data.err) {
            window.alertify.error(response.data.err.message);
            callback && callback(response.data.err);
        } else {
            callback && callback(null, response.data.data);
        }
    })
        .catch((error) => {
            if (error) {
                window.alertify.error(error);
                callback && callback(error);
            }
    })
};


export function staffLogin(username, password, callback) {
    const request = axios.post(`${ROOT_URL}/user/login`, {username, password});
    generateInvokeNetworkCallback(request, callback);
    return {
        type : USER_LOGIN,
        payload : request
    };
}

export function staffGet(callback) {
    const request = axios.get(`${ROOT_URL}/biz/user/get`);

    request.then((response) => {
        if (response.data.err) {
            callback && callback(response.data.err);
        } else {
            callback && callback(null, response.data.data);
        }
    })
        .catch((error) => {
            if (error) {
                callback && callback(error);
            }
        });

    return {
        type : USER_GET,
        payload : request
    };
}

export function staffLogout(callback) {
    const request = axios.post(`${ROOT_URL}/user/logout`);
    generateInvokeNetworkCallback(request, callback);
    return {
        type : USER_LOGOUT,
        payload : request
    };
}



export function configQuery(callback) {
    const request = axios.get(`${ROOT_URL}/util/queryAllConfig`);
    generateInvokeNetworkCallback(request, callback);
    return {
        type : CONFIG_QUERY,
        payload : request
    };
}

export function configUpdate(params, callback) {
    const request = axios.post(`${ROOT_URL}/util/updateConfig`, params);
    generateInvokeNetworkCallback(request, callback);
    return {
        type : CONFIG_UPDATE,
        payload : request
    };
}

