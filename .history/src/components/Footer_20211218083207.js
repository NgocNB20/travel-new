import React from 'react'
import SiteFooter from './SiteFooter'
import SiteFooterBottom from './SiteFooterBottom'

    
function Fotter() {
    return (
        <>
        <section className="cta-one cta-one__home-two">
            <div className="container">
            <h3>Bạn cần một hướng dẫn viên đồng hành?</h3>
            <div className="cta-one__button-block"><a href="/vi/agencies" className="thm-btn cta-one__btn">Liên hệ</a></div>
            </div>
      </section>
      <SiteFooter />
      <SiteFooterBottom/>
        </>
    )
}

export default Fotter
