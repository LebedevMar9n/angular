import { environment } from './../../environments/environment';

const {API:basseURL}=environment

export const urls={
    users:`${basseURL}/users`,
    posts:`${basseURL}/posts`,
    comments:`${basseURL}/comments`
}