 import blogsService from '../services/blogsService';
import React, { useEffect , useState } from 'react';

const BlogContext=React.createContext();

function BlogProvider({children}) {

    const [blogs, setBlogs] = useState({});
    useEffect(()=>{
        console.log("call api getAll");
        blogsService.getAll()
        .then(response=>{
            setBlogs(response.data);
            console.log(response.data);
        })
        .catch(error=>{
          console.log(error);
          console.error("fail");
        })
    },[])

    return (
        <BlogContext.Provider value={{blogs:blogs}}>
            {children}
        </BlogContext.Provider>
        
    )
}

export  {BlogProvider,BlogContext};
