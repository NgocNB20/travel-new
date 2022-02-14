
import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Pagination from '../components/pagination';
import ListRestaurant from '../components/restaurant/ListRestaurant';
import SearchByType from '../components/restaurant/SearchByType';
import Search from '../components/Search';
import restaurantService  from '../services/RestaurantService';

function Restaurants() {
    const [restaurants,SetRestaurants] = useState({});
    const [page,setPage]=useState(1);
    const [keyword,setKeyword] = useState('');
    const getKeyWord = (keywordUpdate) =>{
         setKeyword(keywordUpdate)
    }
    const increment = (indexPage) => {
        setPage(indexPage)
      }
      useEffect( ()=>{

        try{
            getByPage(page);
        }
        catch(err){
            console.log("Fail call api "+err);
        } 
        },[page])

    const getByPage = async (page,keyword)=>{
        const response= await restaurantService.getByPage(page,keyword);  
        console.log(response.data);       
        SetRestaurants(response.data);
    }

    useEffect(()=>{
        try{
            getByPage(page,keyword);
        }
        catch(err){
            console.log("Fail call api "+err);
        } 
      
    },[keyword])
    
    if(restaurants.data !== undefined){
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
                                <ListRestaurant restaurants={restaurants.data.pageRespDtos} page={restaurants.data.totalPage}/>
                                
                            </div>
                        </div>
                    </div>
                    <Pagination onClick={increment} totalPage={restaurants.data.totalPage} />
                </section>      
            </div>
        )
    }else return ("");
    
}

export default Restaurants
