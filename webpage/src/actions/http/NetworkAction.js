/**
 */

import axios from 'axios'
import moment from 'moment'

export const STAFF_LOGIN = "http_staff_login";
export const STAFF_GET = "http_staff_get";
export const STAFF_LOGOUT = "http_starff_logout";

export const TICKET_QUERY = 'http_ticket_query';
export const TICKET_QUERY_ONE = 'http_ticket_query_one';
export const TICKET_UPSERT = 'http_ticket_upsert';
export const TICKET_DELETE = 'http_ticket_delete';

export const CONFIG_QUERY = 'http_config_query';
export const CONFIG_UPDATE = 'http_config_update';

export const STORY_LIST_BY_DATE_UPDATE = 'http_story_list_by_date_update';
export const STORY_UPDATE_CHOSEN = 'http_story_update_chosen';
export const STORY_UPDATE_TOP = 'http_story_update_top';

export const STUDENT_LIST_UPDATE = 'http_student_list_update';

export const GROUP_LIST_UPDATE = 'http_group_list_update';

export const GROUP_STUDENT_LIST_UPDATE = 'http_group_student_list_update';

export const ROOT_URL = window.SERVER_ROOT_URL;

axios.defaults.withCredentials = true;


var generateInvokeNetworkCallback = function (request, callback) {
    request.then((response) => {
        if (response.data.metadata.err) {
            window.alertify.error(response.data.metadata.err.message);
            callback && callback(response.data.metadata.err);
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
    const request = axios.post(`${ROOT_URL}/staff/login`, {username, password});
    generateInvokeNetworkCallback(request, callback);
    return {
        type : STAFF_LOGIN,
        payload : request
    };
}

export function staffGet(callback) {
    const request = axios.get(`${ROOT_URL}/staff/get`);

    request.then((response) => {
        if (response.data.metadata.err) {
            callback && callback(response.data.metadata.err);
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
        type : STAFF_GET,
        payload : request
    };
}

export function staffLogout(callback) {
    const request = axios.post(`${ROOT_URL}/staff/logout`);
    generateInvokeNetworkCallback(request, callback);
    return {
        type : STAFF_LOGOUT,
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

