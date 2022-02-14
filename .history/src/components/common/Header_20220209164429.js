import React from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar'
import TopHeader from './TopHeader'

function Header() {
    let location = useLocation();
    console.log(location.pathname)
    return (
        location==="/vi"?
        <>
            <TopHeader />
            <Navbar />
        </>:""
    )
}

export default Header
