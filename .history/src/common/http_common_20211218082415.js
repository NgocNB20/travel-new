import axios from "axios";
import {url}  from "../constants/constant.js";
export default  axios.create({
    baseURL: url.toString(),
    headers: {
        'Content-Type': 'application/json'
    }
});