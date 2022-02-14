 import blogsService from '../services/blogsService';
import React, { useEffect , useState } from 'react';

const BlogContext=React.createContext();
 

function BlogProvider({children}) {
    

    const [blogs, setBlogs] = useState({});

    // useEffect(()=>{
    //     blogsService.getAll()
    //     .then(response=>{
    //         setBlogs(response.data);
             
    //     })
    //     .catch(error=>{
    //       console.log(error);
    //       console.error("fail");
    //     })
    // },[])
    useEffect( ()=>{
        const fethApi = async ()=>{
            const response= await blogsService.getAll();    
            setBlogs(response.data);
        }
        fethApi();
        },[])
     

    return (
        <BlogContext.Provider value={{blogs:blogs}}>
            {children}
        </BlogContext.Provider>
        
    )
}

export  {BlogProvider,BlogContext};
