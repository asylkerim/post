import axios from "axios";

axios.defaults.baseURL="https://jsonplaceholder.typicode.com/"

export const getPost=()=>{
    return axios.get("posts?_limit=5")
}