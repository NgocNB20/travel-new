import React from 'react'
import Navbar from './Navbar'
import TopHeader from './TopHeader'

function Header(props) {
    console.log("page header"+props.location.pathname )
    return (
        <>
            <TopHeader />
            <Navbar />
        </>
    )
}

export default Header
