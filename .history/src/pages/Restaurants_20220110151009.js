
import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Pagination from '../components/pagination';
import ListRestaurant from '../components/restaurant/ListRestaurant';
import SearchByType from '../components/restaurant/SearchByType';
import Search from '../components/Search';
import anh2 from '../images/anh2.jpg';

function Restaurants() {
    const [restaurants,SetRestaurants] = useState({});
    const [page,setPage]=useState(1);
    const [keyword,setKeyword] = useState('');
    const getKeyWord = (keywordUpdate) =>{
         setKeyword(keywordUpdate)
    }
    useEffect(()=>{
        console.log('search:'+keyword);
    },[keyword])
   
    return (
        <div>
            <Banner page="ẩm thực" title="Ẩm thực"/>
            <section className="tour-one tour-grid" style={{paddingTop: '50px'}} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4" >
                            <Search getKeyWord={getKeyWord}/>
                            <SearchByType/>                          
                        </div>
                        <div className="col-lg-9 col-md-8" id="restaurant-results" >
                            <div className="tour-sorter-one">
                                <h3><span className="total">18</span> địa điểm ẩm thực được tìm thấy.</h3>
                            </div>
                            <ListRestaurant/>
                            <Pagination/>
                        </div>
                    </div>
                </div>
            </section>      
        </div>
    )
}

export default Restaurants
