 import blogsService from '../services/blogsService';
import React, { useEffect , useState } from 'react';

const BlogContext=React.createContext();

function BlogProvider({children}) {

    const [blogs, setBlogs] = useState({});

    useEffect(()=>{
        const apiBlog= async(()=>{
            try {
                const response = await blogsService.getAll();
                setBlogs(response.data);

            }catch (e) {
              console.log(e);
            }


        })
 
       
 
    },[]);
     

    return (
        <BlogContext.Provider value={{blogs:blogs}}>
            {children}
        </BlogContext.Provider>
        
    )
}

export  {BlogProvider,BlogContext};
