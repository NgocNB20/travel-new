import React from 'react'
import BlockTitle from '../components/BlockTitle'
import HomeSearch from '../components/HomeSearch'
import Slider3D from '../components/Slider3D'
import SliderBlog from '../components/SliderBlog'
import SliderPlace from '../components/SliderPlace'
import SliderTour from '../components/SliderTour'

export default function Home() {
    return (
        <>
            <div id="slider3d">
                <Slider3D/>
            </div>
            <HomeSearch/>
            <BlockTitle title="Tin tức & Sự kiện" subtitle="Đừng bỏ lỡ"/>
            <SliderBlog/>
            <BlockTitle title="Điểm Đến Nổi Bật" subtitle="Khám Phá"/>
            <SliderPlace/>
            <BlockTitle title="Những điểm đến hấp dẫn" subtitle="Những điểm đến hấp dẫn"/>
            <SliderTour/>
        </>
    )
}
