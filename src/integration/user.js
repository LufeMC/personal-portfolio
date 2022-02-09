import {requestBase} from "./requestsBase"

const save = (body, callback) => {
    requestBase.post('user/save', body, callback)
}

export const userService = {
    save
}