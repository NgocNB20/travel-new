import axios from "axios";
import {url,urlImage } from "../constants/constant.js";
export default  axios.create({
    baseURL: url.toString(),
    headers: {
        'Content-Type': 'application/json'
    }
});