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
               
            </div>
        </section>
    )
}

export default ListBlock
