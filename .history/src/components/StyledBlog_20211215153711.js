import styled from 'styled-components'; 
  
const styledBlog=styled.div`
  background:url(${props=>props.image})  center/cover no-repeat;
  width:100%;
  height:300px;
`
export default styledBlog;