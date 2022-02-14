import React from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar'
import TopHeader from './TopHeader'

function Header(props) {
    const location = useLocation();
    console.log(location.pathname)
    return (
        <>
            <TopHeader />
            <Navbar />
        </>
    )
}

export default Header
