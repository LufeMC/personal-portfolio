import axios from "axios";

const baseURL = "https://personal-portfolio-luis.herokuapp.com/api";

const get = (complement, callback) => {
    axios.get(`${baseURL}/${complement}`)
        .then(function (response) {
            callback(response)
        })
        .catch(function (error) {
            console.log(error);
        });
}

const post = (complement, body, callback) => {
    axios.post(`${baseURL}/${complement}`, body)
        .then(function (response) {
            callback(response)
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const requestBase = {
    get,
    post
}