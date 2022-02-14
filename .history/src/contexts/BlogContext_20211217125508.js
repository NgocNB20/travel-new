 import blogsService from '../services/blogsService';
import React, { useEffect , useState } from 'react';

const BlogContext=React.createContext();
await function myFunction() {
    return "Hello";
  }

function BlogProvider({children}) {

    const [blogs, setBlogs] = useState({});

    useEffect( async ()=>{
        const response= await blogsService.getAll();        
            setBlogs(response.data);
    },[])
     

    return (
        <BlogContext.Provider value={{blogs:blogs}}>
            {children}
        </BlogContext.Provider>
        
    )
}

export  {BlogProvider,BlogContext};
