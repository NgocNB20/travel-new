import React from 'react'
import blogsService from '../services/blogsService';

const BlogContext=React.createContext();
function BlogContext({children}) {
    const [blogs, setBlogs] = useState({});

 
    useEffect(()=>{
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
        
        
    )
}

export default BlogContext
