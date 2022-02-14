import httpClient from '../common/http_common'

const getAll=  ()=>{
    return  httpClient.get(`/places`);
}  
// const createBlog=(data)=>{
//     return httpClient.post(`/employees`,data);
// }
const get=(id)=>{
    return httpClient.get(`/places/details/${id}`);
}
// const update=(data)=>{
//     return httpClient.put(`/employees`,data);
// }
// const remove=(id)=>{
//     return httpClient.delete(`/employees/${id}`);
// }
const logger={getAll,get}
export default logger;