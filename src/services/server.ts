import axios, { AxiosRequestConfig } from 'axios';

import { SERVER_HOST } from '../constants/environment';
import { Session } from '../types';

function request(configuration: AxiosRequestConfig, session?: Session) {
    const config: AxiosRequestConfig = {
        baseURL: `${SERVER_HOST}/api/v1`,
        ...configuration,
    };

    if (session) {
        config.headers = {
            ...(config.headers || {}),
            'Authorization': `${session.scheme} ${session.credentials}`,
        };
    }

    return axios(config);
}

export function loginWithGoogle(googleIdToken: string): Promise<Session> {
    return request({
        url: '/auth/google',
        method: 'POST',
        data: {
            "id_token": googleIdToken,
        },
    })
        .then(response => {
            return response.data.data as Session;
        });
}

export function getMessage(session: Session): Promise<string> {
    return request({
        url: '/message',
        method: 'GET',
    }, session)
        .then(response => {
            return response.data.data.message as string;
        });
}