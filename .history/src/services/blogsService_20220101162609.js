import httpClient from '../common/http_common'

const getAll=  ()=>{
    return  httpClient.get(`/blogs`);
}
const getByPage =  (page,search="")=>{
    return  httpClient.get(`/blogs/page/${page}?search=${search}`);
}   
// const createBlog=(data)=>{
//     return httpClient.post(`/employees`,data);
// }
const get=(id)=>{
    return httpClient.get(`/blogs/detail/${id}`);
}
const getTop=(id)=>{
    return httpClient.get(`/blogs/top/${id}`);
}
// const update=(data)=>{
//     return httpClient.put(`/employees`,data);
// }
// const remove=(id)=>{
//     return httpClient.delete(`/employees/${id}`);
// }

const logger={getAll,get,getTop,getByPage}
export default logger;