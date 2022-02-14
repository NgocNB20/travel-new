import React, { useEffect, useState } from 'react';
import categoriesService from '../../services/CategoryService';

function FormTour() {
    const [category,setCategory] = useState({});
    useEffect(()=>{
        const fetchData = async ()=>{
        const response= await categoriesService.getAll();
        if(response.data.success){
            console.log(response.data.data);
            setCategory(response.data.data);
            }                 
        }
        try{
            fetchData();
        }
        catch(error){
            console.log(error);
        }

        },[]);
     

    return (
        <>
            <div className="tour-sidebar">
                <div className="tour-sidebar__search tour-sidebar__single">
                    <h3>Tìm địa điểm</h3>
                    <div className="tour-sidebar__search-form search-form" id="place-search-form">
                        <div className="input-group">
                            <input type="text" placeholder="Điểm đến" name="place" id="place" />
                        </div>
                        <div className="input-group">
                        <select  defaultValue={'DEFAULT'} >
                                <option value="DEFAULT" disabled>Loại hình</option>
                                
                                {
                                    Array.from(category).map((c,index) => {
                            return (
                                <option key={index} value={index + 1}>{c.name}</option>
                                )
                            })
                                     
                                }
                            </select>
                        </div>
                        <div className="input-group">
                            <button type="button" className="thm-btn search-btn">Tìm kiếm</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormTour
