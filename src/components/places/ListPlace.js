import React, { useEffect, useState } from 'react';
import Pagination from '../common/pagination';
import Place from './Place';
import placesService from '../../services/placesService';


function ListPlace() {
    
    const [page,setPage]=useState(1);
    const [places, setPlaces] = useState({});
    const increment = (indexPage) => {
        setPage(indexPage)
      }

    const getByPage = async (page)=>{
        const response= await placesService.getByPage(page);    
        setPlaces(response.data);
    }

    useEffect( ()=>{
        
        try{
            getByPage(page);
        }
        catch(err){
            console.log("Fail call api "+err);
        } 
        },[page])
 



    if(places.data !== undefined) {
        return (
            <section className="destinations-three" style={{paddingTop: '50px'}}>
                <div className="container">
                    <div className="tour-sorter-one switch-view">
                        <h3><span>{places.data.length}</span> Điểm tham quan</h3>
                        <div className="tour-sorter-one__right">
                            <a href="/vi/places-grid" className="px-2 active" style={{width: 'auto', minWidth: '43px'}}><i className="tripo-icon-squares mr-1" />Lưới</a>
                            <a href="/vi/places-map" className="px-2 " style={{width: 'auto', minWidth: '43px'}}><i className="tripo-icon-placeholder mr-1" />Bản đồ</a>
                        </div>
                    </div>
                    <div className="row">
                        { 
                            Array.from(places.data.pageRespDtos).map((place,index) => {
                            return (
                                    <div key={index} className="col-lg-4 col-md-6">
                                        <Place place={place} />
                                    </div>
                                )
                         })
                     } 
                    </div>
                </div>
                <Pagination onClick={increment} totalPage={places.data.totalPage}/>
            </section>
        )
    }else return ("");

}

export default ListPlace
