import axios from "axios";
import constant from "../constants/constant.js";
export default  axios.create({
    baseURL: constant.URL,
    headers: {
        'Content-Type': 'application/json'
    }
});