import axios from "axios";
import logger from "../constants/constant.js";
export default  axios.create({
    baseURL: logger.URL,
    headers: {
        'Content-Type': 'application/json'
    }
});