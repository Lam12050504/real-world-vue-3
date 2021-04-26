import axios from "axios";
const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Lam12050504/real-world-vue-3/events',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
})

export default {
    getEvents() {
        return apiClient.get('/ ')
    },
    getEvent(id) {
        return apiClient.get('/' + id)
    }
}