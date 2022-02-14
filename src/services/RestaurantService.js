import httpClient from '../common/http_common';

const getAll=  ()=>{
    return  httpClient.get(`/restaurants`);
}
 
const getByPage =  (page,search="")=>{
    return  httpClient.get(`/restaurants/page/${page}?search=${search}`);
}    
// const createBlog=(data)=>{
//     return httpClient.post(`/employees`,data);
// }
const get=(id)=>{
    return httpClient.get(`/restaurants/detail/${id}`);
}
// const update=(data)=>{
//     return httpClient.put(`/employees`,data);
// }
// const remove=(id)=>{
//     return httpClient.delete(`/employees/${id}`);
// }
const logger={getAll,get,getByPage}
export default logger;