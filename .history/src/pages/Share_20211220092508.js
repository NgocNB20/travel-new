import React from 'react'
import { Link } from 'react-router-dom'

function Share() {
    return (
        <>
            <div className="blog-details__bottom">
                <div className="sidebar__social-list">
                    <span className="px-2">Chia sẻ</span>
                    <Link to="#" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="#" target="_blank">
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to="#" target="_blank">
                        <i className="fab fa-telegram-plane"></i>
                    </Link>
                    <Link to="#" target="_blank">
                        <i className="fab fa-pinterest-p"></i>
                    </Link>
                    <Link to="#" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                    </Link>
                </div>
            </div>
        </> 
        
    )
}

export default Share
