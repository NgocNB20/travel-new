import React from 'react';
import Blog from './Blog';
import Pagination from '../pagination';
import {useContext,useEffect,useState} from 'react';
import blogsService from '../../services/blogsService';
import {BlogContext} from '../../contexts/BlogContext';

function ListBlock() {
    const tagSpan=document.getElementsByClassName('page');
    console.log(tagSpan[1].classList.add("active"));
    const [page,setPage]=useState(1);
    const [blogs, setBlogs] = useState({});
    const increment = (indexPage) => {
        setPage(indexPage)
      }

    const fethApi = async (page)=>{
        const response= await blogsService.getByPage(page);    
        setBlogs(response.data);
    }

    useEffect( ()=>{
        
        try{
            fethApi(page);
        }
        catch(err){
            console.log("Fail call api "+err);
        } 
        },[page])
 

    // const {blogs} = useContext(BlogContext);
    
    if(blogs.data !== undefined) {
        return (
            <section className="blog-one blog-one__grid">
                <div className="container">
                    <div className="row">
                     { 
                            Array.from(blogs.data.pageRespDtos).map((blog,index) => {
                            return (
                                <div key={index} className="col-lg-4 col-md-6">
                                        <Blog  blog={blog} />
                                </div> 
                                )
                         })
                     } 
 
             
                    </div>
                    <Pagination onClick={increment} totalPage={blogs.data.totalPage}/>
                </div>
            </section>
        )
    }else{
        return ("");
    }
    



}

export default ListBlock;
