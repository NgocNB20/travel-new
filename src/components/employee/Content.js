import { useEffect, useState } from "react";

const Content = () => {
    useEffect(()=>{
        document.title=title;
        console.log("render useEffect");
      })
    const [title,setTitle] =useState('');

    return ( 
        <div>
        <h2>Hi ae</h2>
        <input value={title} onChange={(e)=>setTitle(e.target.value)}></input>
        {console.log("render funtion")}
        </div>
       
     );
}
export default Content;