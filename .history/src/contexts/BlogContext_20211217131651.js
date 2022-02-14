 import blogsService from '../services/blogsService';
import React, { useEffect , useState } from 'react';

const BlogContext=React.createContext();
 

function BlogProvider({children}) {

    const [blogs, setBlogs] = useState([]);

    useEffect( ()=>{
    const fethApi=async ()=>{
        const response= await blogsService.getAll();    
        setBlogs(response.data);
    }
    fethApi();
    },[])
    if(blogs.length>0){
        console.log("a");
    }
     

    return (
        <BlogContext.Provider value={{blogs:blogs}}>
            {children}
        </BlogContext.Provider>
        
    )
}

export  {BlogProvider,BlogContext};
