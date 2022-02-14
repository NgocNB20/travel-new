import React,{ useEffect , useState} from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import TopHeader from './TopHeader';
 

function Header() {
    const[show,Setshow] = useState(useLocation()==="/vi/login")
      
     
    return (
        !show?
        <>
            <TopHeader />
            <Navbar />
        </>:""
    )
}

export default Header
