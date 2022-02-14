import React from 'react';
import tourService from '../services/TourService';

function TourContext() {
    const [tours,setTours] = useState({});
    useEffect( ()=>{
        const fethApi = async ()=>{
            const response= await tourService.getAll();    
            setTours(response.data);
        }
        fethApi();
        },[])

    return (
        
    )
}

export default TourCntext
