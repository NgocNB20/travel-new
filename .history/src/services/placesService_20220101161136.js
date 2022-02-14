import httpClient from '../common/http_common';

const getAll=  ()=>{
    return  httpClient.get(`/places`);
}
const getTopSix = ()=>{
    return httpClient.get(`/places/top-six`);
}
const getByPage =  (page,search="")=>{
    return  httpClient.get(`/places/page/${page}?search=${search}`);
}    
// const createBlog=(data)=>{
//     return httpClient.post(`/employees`,data);
// }
const get=(id)=>{
    return httpClient.get(`/places/detail/${id}`);
}
// const update=(data)=>{
//     return httpClient.put(`/employees`,data);
// }
// const remove=(id)=>{
//     return httpClient.delete(`/employees/${id}`);
// }
const logger={getAll,get,getTopSix,getByPage}
export default logger;