import {requestBase} from "./requestsBase"

const list = (callback) => {
    requestBase.get('projects/list', callback)
}

export const projectService = {
    list
}