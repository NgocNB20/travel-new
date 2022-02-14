import httpClient from '../common/http_common';

const getAll = ()=>{
    return  httpClient.get(`/hotels`);
}
 
const getByPage =  (page,search="")=>{
    return  httpClient.get(`/hotels/page/${page}?search=${search}`);
}    
// const createBlog=(data)=>{
//     return httpClient.post(`/employees`,data);
// }
const get = (id)=>{
    return httpClient.get(`/hotels/detail/${id}`);
}
const getTop=(id)=>{
    return httpClient.get(`/hotels/top/${id}`);
}

// const update=(data)=>{
//     return httpClient.put(`/employees`,data);
// }
// const remove=(id)=>{
//     return httpClient.delete(`/employees/${id}`);
// }
const logger={getAll,get,getByPage,getTop}
export default logger;