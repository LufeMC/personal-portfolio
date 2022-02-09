import {requestBase} from "./requestsBase"

const save = (body, callback) => {
    requestBase.post('request/save', body, callback)
}

const sendEmail = (body, callback) => {
    requestBase.post('request/sendEmail', body, callback)
}

export const requestsService = {
    save,
    sendEmail
}