import React from 'react'
import Blog from '../components/Blog'

function ListBlock() {
    return (
        <section className="blog-one blog-one__grid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <Blog/>
                    </div> 
                    <div className="col-lg-4 col-md-6">
                        <Blog/>
                    </div> 
                    <div className="col-lg-4 col-md-6">
                        <Blog/>
                    </div> 
                    <div className="col-lg-4 col-md-6">
                        <Blog/>
                    </div> 
                     
                </div>
                <div className="post-pagination">
                    <a className="active" href="/vi/blogs/tintuc-24/page1">01</a>
                    <a href="/vi/blogs/tintuc-24/page2">02</a>
                    <a href="/vi/blogs/tintuc-24/page2"><i className="fa fa-angle-right" /></a>
                </div>
            </div>
        </section>
    )
}

export default ListBlock
