 import blogsService from '../services/blogsService';
import React, { useEffect , useState } from 'react';

const BlogContext=React.createContext();
 

function BlogProvider({children}) {

    const [blogs, setBlogs] = useState({});

    useEffect( ()=>{
    const fethApi=async ()=>{
        const response= await blogsService.getAll();  
        console.log(response);      
        setBlogs(response.data);
    }

    },[])
     

    return (
        <BlogContext.Provider value={{blogs:blogs}}>
            {children}
        </BlogContext.Provider>
        
    )
}

export  {BlogProvider,BlogContext};
