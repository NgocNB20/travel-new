import httpClient from '../common/http_common';

const getAll=  ()=>{
    return  httpClient.get(`/tours`);
}  
// const createBlog=(data)=>{
//     return httpClient.post(`/employees`,data);
// }
const get=(id)=>{
    return httpClient.get(`/tours/detail/${id}`);
}
// const update=(data)=>{
//     return httpClient.put(`/employees`,data);
// }
// const remove=(id)=>{
//     return httpClient.delete(`/employees/${id}`);
// }
const logger={getAll,get}
export default logger;