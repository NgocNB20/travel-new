import React from 'react';
import Blog from './Blog';
import Pagination from '../pagination';
import {useContext,useEffect,useState} from 'react';
import blogsService from '../../services/blogsService';
import {BlogContext} from '../../contexts/BlogContext';

function ListBlock() {
    const [page,setPage]=useState(1);
    const [blogs, setBlogs] = useState({});

    const fethApi = async (page)=>{
        const response= await blogsService.getByPage(page);    
        setBlogs(response.data);
    }

    useEffect( ()=>{
        
        try{
            fethApi();
        }
        catch(err){
            console.log("Fail call api "+err);
        } 
        },[])
 

    // const {blogs} = useContext(BlogContext);
    
    if(blogs.data.pageRespDtos !== undefined) {
        return (
            <section className="blog-one blog-one__grid">
                <div className="container">
                    
                    <Pagination/>
                </div>
            </section>
        )
    }else{
        return ("");
    }
    



}

export default ListBlock;
