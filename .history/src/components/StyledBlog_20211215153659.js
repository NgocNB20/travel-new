import styled from 'styled-components'; 
import anh2 from '../assets/image/anh2.jpg';  
const styledBlog=styled.div`
  background:url(${props=>props.image})  center/cover no-repeat;
  width:100%;
  height:300px;
`
export default styledBlog;